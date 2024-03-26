import puppeteer from "puppeteer";

let scrape = async () => {
  const browser = await puppeteer.launch({
    args: ["--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://enamad.ir/DomainListForMIMT");
  await page.waitForSelector("#ListContent");

  let response = await page.evaluate(() => {
    const rows = document.querySelectorAll(".row");
    const data = [];

    rows.forEach((row) => {
      try {
        const domain = row.querySelector(".col-md-2 > a");
        const name = row.querySelector(".col-mod-3");
        // const stars = row.querySelector("")
        // const expirationDate = roq.querySelector("")

        data.push({
          domain: domain.innerText,
          name: name.innerText,
        });

        return response;
      } catch (err) {
        console.error(err);
      }
    });
  });
};

scrape()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
