import { ref } from 'vue';
import axios from 'axios';

export default function useAppLogic() {
  let balance = ref(1000);
  let currency = ref('RUB');
  let rateRubUSD = ref(75);

  const exchange = () => {
    axios.get('http://localhost:4000/rate').then((response) => {
      rateRubUSD.value = response.data.rate;

      if (currency.value === 'RUB') {
        currency.value = 'USD';
        balance.value = balance.value / rateRubUSD.value;
      } else {
        currency.value = 'RUB';
        balance.value = balance.value * rateRubUSD.value;
      }
    })
    console.log('exchange');
  }

  const getRate = () => {
    axios.get('http://localhost:4000/rate').then((response) => {
      rateRubUSD.value = response.data.rate;
    });
  }

  setInterval(() => {
    getRate();
  }, 1000);

  const earn = () => {
    if (currency.value === 'RUB') {
      balance.value += 100;
    } else {
      balance.value = balance.value + 100 / rateRubUSD.value;
    }
  }

  return {
    balance,
    currency,
    rateRubUSD,
    exchange,
    earn
  }
}
