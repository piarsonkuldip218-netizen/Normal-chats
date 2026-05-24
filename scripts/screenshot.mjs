import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const url = 'http://127.0.0.1:3000/';
const outDir = './preview';
mkdirSync(outDir, { recursive: true });

(async () => {
  const browser = await chromium.launch();

  const ctxDesktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const pageD = await ctxDesktop.newPage();
  await pageD.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await pageD.waitForTimeout(3500);
  await pageD.screenshot({ path: `${outDir}/01-desktop-hero.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, document.querySelector('#services').offsetTop - 80));
  await pageD.waitForTimeout(1500);
  await pageD.screenshot({ path: `${outDir}/02-desktop-services.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, document.querySelector('#about').offsetTop - 80));
  await pageD.waitForTimeout(1500);
  await pageD.screenshot({ path: `${outDir}/03-desktop-about.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, document.querySelector('#why-us').offsetTop - 80));
  await pageD.waitForTimeout(1500);
  await pageD.screenshot({ path: `${outDir}/04-desktop-whyus.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, document.querySelector('#contact').offsetTop - 80));
  await pageD.waitForTimeout(1500);
  await pageD.screenshot({ path: `${outDir}/05-desktop-contact.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await pageD.waitForTimeout(1200);
  await pageD.screenshot({ path: `${outDir}/06-desktop-footer.png`, fullPage: false });
  await pageD.evaluate(() => window.scrollTo(0, 0));
  await pageD.waitForTimeout(800);
  await pageD.screenshot({ path: `${outDir}/00-desktop-full.png`, fullPage: true });
  await ctxDesktop.close();

  const ctxMobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const pageM = await ctxMobile.newPage();
  await pageM.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await pageM.waitForTimeout(3500);
  await pageM.screenshot({ path: `${outDir}/07-mobile-hero.png`, fullPage: false });
  await pageM.evaluate(() => window.scrollTo(0, document.querySelector('#services').offsetTop - 80));
  await pageM.waitForTimeout(1200);
  await pageM.screenshot({ path: `${outDir}/08-mobile-services.png`, fullPage: false });
  await pageM.evaluate(() => window.scrollTo(0, document.querySelector('#contact').offsetTop - 80));
  await pageM.waitForTimeout(1200);
  await pageM.screenshot({ path: `${outDir}/09-mobile-contact.png`, fullPage: false });
  await pageM.evaluate(() => window.scrollTo(0, 0));
  await pageM.waitForTimeout(800);
  await pageM.screenshot({ path: `${outDir}/10-mobile-full.png`, fullPage: true });
  await ctxMobile.close();

  await browser.close();
  console.log('SCREENSHOTS_DONE');
})().catch((e) => { console.error('SCREENSHOT_ERROR', e); process.exit(1); });
