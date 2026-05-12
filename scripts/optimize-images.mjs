import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';

const INPUT_DIR = 'public/images';
const OUTPUT_DIR = 'public/images/optimized';

await mkdir(OUTPUT_DIR, { recursive: true });

const files = await readdir(INPUT_DIR);
const images = files.filter(f => /\.(jpg|jpeg)$/i.test(f));

let skipped = 0;
let processed = 0;

for (const file of images) {
  const inputPath = join(INPUT_DIR, file);
  const name = basename(file, extname(file));

  const webp900 = join(OUTPUT_DIR, `${name}.webp`);
  const webp450 = join(OUTPUT_DIR, `${name}-450w.webp`);
  const jpg900  = join(OUTPUT_DIR, `${name}.jpg`);

  const srcStat = await stat(inputPath);

  // Skip if all outputs exist and are newer than the source
  try {
    const [s1, s2, s3] = await Promise.all([stat(webp900), stat(webp450), stat(jpg900)]);
    if (s1.mtimeMs > srcStat.mtimeMs && s2.mtimeMs > srcStat.mtimeMs && s3.mtimeMs > srcStat.mtimeMs) {
      skipped++;
      continue;
    }
  } catch {
    // one or more outputs missing — proceed
  }

  const pipeline = sharp(inputPath);

  await Promise.all([
    pipeline.clone().resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(webp900),
    pipeline.clone().resize({ width: 450, withoutEnlargement: true })
      .webp({ quality: 82 }).toFile(webp450),
    pipeline.clone().resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true }).toFile(jpg900),
  ]);

  console.log(`✓ ${file}`);
  processed++;
}

console.log(`\nDone: ${processed} optimized, ${skipped} skipped (up to date).`);
