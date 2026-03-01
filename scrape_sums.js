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

              // Extract all text from the table and find all numbers (integers and decimals)
              const tableText = await page.locator('table').innerText();
                   const numbers = tableText.match(/-?\d+(\.\d+)?/g);

              if (numbers) {
                                for (const n of numbers) {
                                                      totalSum += parseFloat(n);
                                }
              }
     }

     console.log(`TOTAL_SUM: ${totalSum}`);
          await browser.close();
})();
