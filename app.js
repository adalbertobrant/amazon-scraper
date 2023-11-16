const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const path = require('path');



const app = express();
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.post('/your-backend-url', async (req, res) => {
    const asin = req.body.asin;
    const keyword = req.body.keyword;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    let position = -1;
    for (let i = 1; i <= 5; i++) {
        await page.goto(`https://www.amazon.com/s?k=${encodeURIComponent(keyword)}&page=${i}`);
		console.log("esperando resultados");
        const asins = await page.$$eval('[data-asin]', elements => elements.map(el => el.getAttribute('data-asin')));
        const index = asins.indexOf(asin);

        if (index !== -1) {
            position = index + 1 + (i - 1) * asins.length;
            break;
        }
    }

    await browser.close();
	console.log("work done");
    res.send(String(position));
});

app.listen(3000, () => console.log('Server running on port 3000'));

