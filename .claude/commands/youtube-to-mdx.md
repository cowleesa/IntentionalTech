# youtube-to-mdx

Convert a YouTube video into a fully-structured MDX blog post for the Intentional Tech site.

## Usage

```
/youtube-to-mdx <YouTube URL or video ID> [--images "url1, url2, ..."]
```

## What to do

You will be given a YouTube video URL or ID, and optionally a comma-separated list of image URLs to embed in the post.

### Step 1 — Gather video metadata

Fetch the video page or use the provided URL to retrieve:

- Video title
- Video description
- Upload date
- Channel name (should be "Intentional Tech")
- Video ID (the `v=` parameter from the URL)

### Step 2 — Generate the slug

Convert the video title to a URL-safe slug:

- Lowercase everything
- Replace spaces and special characters with hyphens
- Strip apostrophes and punctuation
- Trim leading/trailing hyphens

Example: "The Gamer Dad's Ultimate Survival Guide" → `gamer-dad-survival-guide`

### Step 3 — Write the MDX frontmatter

```mdx
---
title: "<video title>"
pubDate: <upload date as YYYY-MM-DD>
description: "<one or two sentence summary drawn from the video description>"
author: "Chris Cowley"
tags: [<2–4 relevant lowercase tags>]
image: "<URL of the first supplied image, if any>"
---
```

- The `image` field should be set to the first image URL from `--images` if one was supplied. This becomes the Open Graph image for the post.
- If no image is supplied, omit the `image` field.
- Tags should be chosen from the video's topic. Common tags: `handhelds`, `retro`, `lifestyle`, `reviews`, `nintendo`, `steam-deck`, `pc-gaming`, `mobile`.

### Step 4 — Write the MDX imports

```mdx
import Kicker from "/src/components/Kicker.astro";
import YouTube from "/src/components/YouTube.astro";
import Image from "/src/components/Image.astro";
```

Only import `Image` if images were supplied.

### Step 5 — Write the Kicker block

```mdx
<Kicker
  title="<video title>"
  kicker="<one sentence hook — the core promise or tension of the article>"
/>
```

### Step 6 — Embed the YouTube video

```mdx
<YouTube
  id="<video ID>"
  title="<video title>"
  caption="<video title> • Intentional Tech • Uploaded <Month DD, YYYY>"
/>
```

### Step 7 — Write the article body

Using the video description and title as a guide, write 600–1200 words of blog post content structured as:

- 3–5 `##` section headings that naturally break the topic into chapters
- 2–4 paragraphs per section
- Conversational tone — direct, honest, enthusiastic but not hyperbolic
- Match the voice and style of existing posts in `src/content/blog/`
- Do not overuse em-dash. Find alternative phrasing that appears more natural.

**Image placement rules:**

If `--images` were supplied, distribute them across the article body at natural section breaks using the `Image` component:

```mdx
<Image
  src="<image URL>"
  alt="<descriptive alt text for the image>"
  caption="<optional short caption>"
/>
```

- Place the **first image** immediately after the first `##` heading (before its paragraph text).
- Distribute remaining images one per section, at the start of that section.
- Do not place more than one image per section.
- If there are more sections than images, leave later sections without images.

### Step 8 — Output the file

Write the complete MDX file to:

```
src/content/blog/<slug>.mdx
```

Confirm the file path and slug with the user before writing.

## Example output structure

```mdx
---
title: "The Gamer Dad's Ultimate Survival Guide"
pubDate: 2026-01-24
description: "Becoming a parent changes everything — but it doesn't have to mean giving up gaming. Here's how to make it work."
author: "Chris Cowley"
tags: ["lifestyle", "handhelds"]
image: "/images/gamer-dad.jpg"
---

import Kicker from "/src/components/Kicker.astro";
import YouTube from "/src/components/YouTube.astro";
import Image from "/src/components/Image.astro";

<Kicker
  title="The Gamer Dad's Ultimate Survival Guide"
  kicker="Your routine will shift, your energy will dip, and your free time will all but vanish — but gaming can still have a place in your life."
/>

<YouTube
  id="bra5BMlEjpI"
  title="The Gamer Dad's Ultimate Survival Guide"
  caption="The Gamer Dad's Ultimate Survival Guide • Intentional Tech • Uploaded Jan 24, 2026"
/>

## Gaming and Parenthood Aren't Mutually Exclusive

<Image
  src="/images/gamer-dad.jpg"
  alt="A parent playing a handheld console while a child sleeps nearby"
  caption="Finding the pockets — gaming as a parent."
/>

...article content...
```
