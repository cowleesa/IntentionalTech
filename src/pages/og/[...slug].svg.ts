import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id.replace(/\.[^.]+$/, '') },
    props: { title: post.data.title, description: post.data.description },
  }));
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapTitle(title: string, maxCharsPerLine: number): string {
  const words = title.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if (currentLine.length + word.length + 1 > maxCharsPerLine && currentLine) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += (currentLine ? ' ' : '') + word;
    }
  }
  if (currentLine) lines.push(currentLine.trim());

  return lines
    .slice(0, 3)
    .map((line, i) => {
      const y = 200 + i * 60;
      return `<tspan x="60" y="${y}">${escapeXml(line)}</tspan>`;
    })
    .join('');
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1).trimEnd() + '\u2026';
}

export async function GET({ props }: APIContext) {
  const { title, description } = props as { title: string; description: string };

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#1a1a2e"/>
  <rect x="0" y="0" width="1200" height="6" fill="#69a2ff"/>
  <text x="60" y="100" font-family="system-ui, sans-serif" font-size="20"
        font-weight="600" letter-spacing="0.1em" fill="#69a2ff">
    INTENTIONAL TECH
  </text>
  <text font-family="system-ui, sans-serif" font-size="48"
        font-weight="800" fill="#b8b5ff">
    ${wrapTitle(title, 30)}
  </text>
  <text x="60" y="520" font-family="system-ui, sans-serif" font-size="20"
        fill="#9e9cb8">
    ${escapeXml(truncate(description, 90))}
  </text>
  <text x="60" y="580" font-family="monospace" font-size="16" fill="#69a2ff">
    intentionaltech.co.uk
  </text>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' },
  });
}
