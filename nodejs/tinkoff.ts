import OpenAPI from '@tinkoff/invest-openapi-js-sdk';
import { sandboxToken, apiURL, socketURL } from './config';

const api = new OpenAPI({ apiURL, secretToken: sandboxToken, socketURL });
// @ts-ignore
const fs = require('fs');

async function run() {
  try {
    api.candle({ figi: 'BBG0013HGFT4', interval: '1min'}, (candle) => {
      console.log(candle);

      fs.writeFile('usd.txt', candle.c.toString(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Курс доллара сохранен');
        }
      });
    });
  } catch(e) {
    console.log('error', e);
  }
}

run();
