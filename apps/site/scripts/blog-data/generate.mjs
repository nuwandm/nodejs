import { writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import generateBlogData from '../../next-data/generators/blogData.mjs';

const blogData = await generateBlogData();

writeFileSync(
  new URL(`../../public/blog-data.json`, import.meta.url),
  JSON.stringify(blogData),
  'utf8'
);
