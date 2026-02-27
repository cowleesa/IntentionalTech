import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

async function renderMarkdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return String(result);
}

function mdxToRssHtml(body: string | undefined): string {
  if (!body) return '';

  let content = body;

  // Strip import statements
  content = content.replace(/^import\s+.*$/gm, '');

  // Replace <YouTube> components with a linked thumbnail
  content = content.replace(
    /<YouTube\s+([^]*?)\/>/g,
    (_match, attrs: string) => {
      const id = attrs.match(/id\s*=\s*"([^"]+)"/)?.[1];
      const title = attrs.match(/title\s*=\s*"([^"]+)"/)?.[1] || 'YouTube Video';
      if (!id) return '';
      return `[![${title}](https://img.youtube.com/vi/${id}/hqdefault.jpg)](https://www.youtube.com/watch?v=${id})`;
    },
  );

  // Strip <Kicker> components (title/description already in RSS item metadata)
  content = content.replace(/<Kicker\s+[^]*?\/>/g, '');

  return content.trim();
}

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const items = await Promise.all(
    sortedPosts.map(async (post) => {
      const cleanedMarkdown = mdxToRssHtml(post.body);
      const htmlContent = await renderMarkdownToHtml(cleanedMarkdown);

      const slug = post.slug || post.id;
      const imageUrl = post.data.image
        ? new URL(post.data.image, context.site).href
        : new URL(`og/${slug}.svg`, context.site).href;

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${slug}/`,
        content: htmlContent,
        customData: `<media:content url="${imageUrl}" medium="image" />`,
      };
    })
  );

  return rss({
    title: 'Intentional Tech',
    description: 'Mindful reviews and stories about handheld tech for casual gamers.',
    site: context.site!,
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
    items,
    customData: '<language>en-gb</language>',
  });
}
