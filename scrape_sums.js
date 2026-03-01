const { chromium } = require('playwright');

(async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      let totalSum = 0;

     for (let seed = 13; seed <= 22; seed++) {
               const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;
               console.log(`Scraping ${url}`);
               await page.goto(url);
               await page.waitForSelector('table');

          const cells = await page.locator('td, th').allTextContents();
               for (const cell of cells) {
                             const num = parseFloat(cell.trim());
                             if (!isNaN(num)) {
                                               totalSum += num;
                             }
               }
     }

     console.log(`TOTAL_SUM: ${totalSum}`);
      await browser.close();
})();
