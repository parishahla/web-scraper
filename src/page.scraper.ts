//! retry 3 times
const scraperObject = {
  url: "https://enamad.ir/DomainListForMIMT",
  async scraper(browser: any) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    // Navigate to the selected page
    await page.goto(this.url);

    // Wait for the required DOM to be rendered
    await page.waitForSelector(".ListContent");

    const content = await page.$eval("#Div_Content", (el: any) => el.innerHTML);
    console.log(content); // Print the extracted content

    await browser.close();
  },
};

export default scraperObject;
