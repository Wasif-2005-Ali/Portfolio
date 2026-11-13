// Probe below-the-fold home sections with real scrolling (reveal animations
// are IntersectionObserver-gated, so fullPage screenshots leave them hidden).
import { chromium } from 'playwright';
import { join } from 'node:path';

const base = process.env.SITE_URL || 'http://localhost:3001';
const outDir = '/home/hatch/workspace/portfolio-v2/screenshots/local';

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.addInitScript(() => {
  try { sessionStorage.setItem('wa-intro-v1', '1'); } catch {}
});
await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1200);

// Step-scroll down the whole page so every reveal fires.
const total = await page.evaluate(() => document.body.scrollHeight);
for (let y = 900; y < total; y += 900) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(500);
}
await page.waitForTimeout(1500);

// Selected work section
await page.locator('text=Selected work').first().scrollIntoViewIfNeeded({ timeout: 5000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: join(outDir, 'home-selected-work.png') });

// Stats / stack band area
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.45));
await page.waitForTimeout(1200);
await page.screenshot({ path: join(outDir, 'home-mid.png') });

// Writing section
await page.locator('text=Notes from the work').first().scrollIntoViewIfNeeded({ timeout: 5000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: join(outDir, 'home-writing.png') });

// Footer (giant wordmark)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(1500);
await page.screenshot({ path: join(outDir, 'home-footer.png') });

// Sanity: count visible project cards + footer wordmark text
const cards = await page.locator('a[href^="/projects/"]').count();
const wordmark = await page.locator('text=WASIF ALI').count();
console.log('project links on home:', cards, '| WASIF ALI wordmarks:', wordmark);
await browser.close();
console.log('probe done');
