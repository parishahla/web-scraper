import pageScraper from "./page.scraper";

async function scrapeAll(browserInstance: any) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
}

export default (browserInstance: any) => scrapeAll(browserInstance);
