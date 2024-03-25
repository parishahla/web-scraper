//! retry - forrest night's video
//! go deeper and extrct what i want
//! store in mongo db
//! is gonna need graphql
const scraperObject = {
  url: "https://enamad.ir/DomainListForMIMT",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await page.goto(this.url);
    // Wait for the required DOM to be rendered
    // await page.waitForSelector("#ListContent");
    // const content = await page.$eval("#Div_Content", (el) => el.innerHTML);
    // console.log(content); // Print the extracted content
  },
};
export default scraperObject;
