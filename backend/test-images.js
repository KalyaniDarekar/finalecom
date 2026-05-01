const https = require('https');

const urls = [
  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-5g.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-5g-r.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-11.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-pro-129-2022.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s9-ultra.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-air5-2022.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/oneplus-pad.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/lenovo-tab-p12-pro.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-pad-6.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/apple-ipad-mini-2021.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-tab-s9-fe.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/realme-pad-2.jpg',
  'https://fdn2.gsmarena.com/vv/bigpic/oppo-pad2.jpg',
];

async function checkUrls() {
  for (const url of urls) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        if (res.statusCode !== 200) {
          console.log(`Failed: ${url} (Status: ${res.statusCode})`);
        }
        resolve();
      }).on('error', (e) => {
        console.log(`Error on ${url}: ${e.message}`);
        resolve();
      });
    });
  }
  console.log('Verification complete.');
}

checkUrls();
