// Screenshot the key pages against a running dev/prod server.
// Usage: npm run dev (in another terminal), then: node scripts/screenshot.mjs
// Screenshots land in ~/workspace/portfolio/screenshots/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = process.env.SITE_URL || 'http://localhost:3000';
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'screenshots');
mkdirSync(outDir, { recursive: true });

const pages = [
  { path: '/', name: 'home-desktop', viewport: { width: 1440, height: 900 } },
  { path: '/', name: 'home-mobile', viewport: { width: 390, height: 844 } },
  { path: '/projects/appointly', name: 'project-appointly', viewport: { width: 1440, height: 900 } },
  { path: '/projects/accessdesk', name: 'project-accessdesk', viewport: { width: 1440, height: 900 } },
  { path: '/projects/gosafar', name: 'project-gosafar', viewport: { width: 1440, height: 900 } },
  { path: '/projects', name: 'projects-list', viewport: { width: 1440, height: 900 } },
  { path: '/about', name: 'about', viewport: { width: 1440, height: 900 } },
  { path: '/cv', name: 'cv', viewport: { width: 1440, height: 900 } },
  { path: '/writing', name: 'writing', viewport: { width: 1440, height: 900 } },
  { path: '/contact', name: 'contact', viewport: { width: 1440, height: 900 } },
  { path: '/links', name: 'links', viewport: { width: 1440, height: 900 } },
];

const browser = await chromium.launch();
for (const p of pages) {
  const context = await browser.newContext({ viewport: p.viewport });
  const page = await context.newPage();
  // Hide the intro loader so screenshots are deterministic.
  await page.addInitScript(() => sessionStorage.setItem('wa-intro-seen', '1'));
  await page.goto(base + p.path, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(600);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: join(outDir, `${p.name}.png`), fullPage: true });
  console.log('shot:', p.name);
  await context.close();
}
await browser.close();
console.log('done ->', outDir);
