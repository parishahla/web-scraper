const scraperObject = {
  url: "https://enamad.ir/DomainListForMIMT",

  async scraper(browser: any) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);

    // Navigate to the selected page
    await page.goto(this.url);

    const data = await page.evaluate(() => {
      const rows = document.querySelectorAll("#Div_Content .row");
      return Array.from(rows).map((row) => {
        const name = row.querySelector(".col-md-3")?.textContent.trim() || null;
        const domain =
          row.querySelector(".col-md-2")?.textContent.trim() || null;
        const stars = row.querySelectorAll(".col-md-2 img").length || null;
        const expirationDate =
          row.querySelectorAll(".col-md-1")[4]?.textContent.trim() || null;
        return { name, domain, stars, expirationDate };
      });
    });

    console.log(data);

    browser.close();
  },
};

export default scraperObject;
