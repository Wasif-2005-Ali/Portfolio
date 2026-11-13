// Retargeted shots: Selected work cards (h2 selector) + intro loader mid-animation.
import { chromium } from 'playwright';
import { join } from 'node:path';

const base = process.env.SITE_URL || 'http://localhost:3001';
const outDir = '/home/hatch/workspace/portfolio-v2/screenshots/local';
const browser = await chromium.launch();

// --- Selected work cards ---
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.addInitScript(() => {
    try { sessionStorage.setItem('wa-intro-v1', '1'); } catch {}
  });
  await page.goto(base + '/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1200);
  const total = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 900; y < total * 0.4; y += 900) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(500);
  }
  const h2 = page.locator('h2', { hasText: 'Projects with a point of view' }).first();
  await h2.scrollIntoViewIfNeeded({ timeout: 5000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: join(outDir, 'home-selected-work2.png') });
  // Stats strip (after the writing section)
  await page.locator('.stats-strip').first().scrollIntoViewIfNeeded({ timeout: 5000 });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: join(outDir, 'home-stats-stack.png') });
  await context.close();
}

// --- Intro loader, no skip key, mid-animation ---
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(base + '/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(900);
  await page.screenshot({ path: join(outDir, 'intro-loader.png') });
  await context.close();
}

await browser.close();
console.log('retarget done');
