// Local viewport screenshots of Wasif's portfolio v2 (prod server on localhost).
// Usage: PORT=3001 npm start in another terminal, then:
//   SITE_URL=http://localhost:3001 NODE_PATH=~/workspace/portfolio/node_modules node scripts/local-shots.mjs
// Screenshots land in ~/workspace/portfolio-v2/screenshots/local/
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = process.env.SITE_URL || 'http://localhost:3000';
const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'screenshots', 'local');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();

async function shoot(path, name, scrollTo) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.addInitScript(() => {
    try { sessionStorage.setItem('wa-intro-v1', '1'); } catch {}
  });
  await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  if (scrollTo) {
    try {
      const el = page.locator(scrollTo).first();
      await el.scrollIntoViewIfNeeded({ timeout: 5000 });
      await page.waitForTimeout(900);
    } catch {
      await page.evaluate((y) => window.scrollTo(0, document.body.scrollHeight * y), 0.4);
      await page.waitForTimeout(900);
    }
  }
  await page.screenshot({ path: join(outDir, `${name}.png`) });
  console.log('shot:', name);
  await context.close();
}

async function full(path, name) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.addInitScript(() => {
    try { sessionStorage.setItem('wa-intro-v1', '1'); } catch {}
  });
  await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: join(outDir, `${name}.png`), fullPage: true });
  console.log('shot:', name);
  await context.close();
}

await shoot('/', 'home-top');
await shoot('/', 'home-projects', 'text=Selected work');
await shoot('/', 'home-principles', 'text=Working principles');
await shoot('/projects', 'projects-top');
await shoot('/projects/gosafar', 'gosafar-top');
await shoot('/projects/appointly', 'appointly-top');
await shoot('/about', 'about-top');
await shoot('/cv', 'cv-top');
await shoot('/contact', 'contact-top');
await shoot('/links', 'links-top');
await shoot('/writing', 'writing-top');
await full('/', 'home-full');

await browser.close();
console.log('done ->', outDir);
