const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 0 // slow down by 250ms);
  });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "home.png" });

  await browser.close();
})();
