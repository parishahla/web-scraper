import Info from "../model/info.schema.js";
const scraperObject = {
    url: "https://enamad.ir/DomainListForMIMT",
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        for (let i = 2; i <= 3; i++) {
            // Navigate to the selected page
            const url = `https://enamad.ir/DomainListForMIMT/Index/${i}`;
            console.log(`Navigating to ${url}...`);
            await page.goto(url);
            const data = await page.evaluate(() => {
                const rows = document.querySelectorAll("#Div_Content .row");
                return Array.from(rows).map((row) => {
                    const name = row.querySelector(".col-md-3")?.textContent.trim() || null;
                    const domain = row.querySelector(".col-md-2")?.textContent.trim() || null;
                    const city = row.querySelectorAll(".col-md-1")[2]?.textContent.trim() || null;
                    const stars = row.querySelectorAll(".col-md-2 img").length || null;
                    const expirationDate = row.querySelectorAll(".col-md-1")[4]?.textContent.trim() || null;
                    const infoObject = {
                        name: name,
                        domain: domain,
                        city: city,
                        stars: stars,
                        expirationDate: expirationDate,
                    };
                    // return infoObject;
                });
            });
            // await createInfo(data);
            console.log(data);
        }
        browser.close();
    },
};
async function createInfo(info) {
    try {
        await Info.create(info);
    }
    catch (error) {
        console.error(error);
    }
}
export default scraperObject;
