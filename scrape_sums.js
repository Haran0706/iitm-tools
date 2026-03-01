const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    let totalSum = 0;

    for (let seed = 13; seed <= 22; seed++) {
        const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;
        await page.goto(url);
        await page.waitForSelector('table');

        // Get the entire table HTML and extract all numbers using a regex
        const content = await page.locator('table').textContent();
        const matches = content.match(/-?\d+(\.\d+)?/g);
        if (matches) {
            for (const match of matches) {
                totalSum += parseFloat(match);
            }
        }
    }

    // Print ONLY the sum on its own line for the checker
    console.log(Math.round(totalSum));
    await browser.close();
})();
