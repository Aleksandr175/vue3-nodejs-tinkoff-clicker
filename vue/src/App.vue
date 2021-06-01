<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">

    <div>Курс: <span>1 USD : {{ rateRubUSD }} RUB</span></div>
    <div>Баланс: <span>{{ balance.toFixed(2) }} {{ currency }}</span></div>

    <div class="buttons">
      <button class="btn" @click="exchange()">Поменять</button>
      <button class="btn btn-second" @click="earn()">Заработать</button>
    </div>
  </div>
</template>

<script>
import useAppLogic from "@/composables/useAppLogic";

export default {
  name: 'App',
  components: {
  },
  setup() {
    const { balance, rateRubUSD, exchange, currency, earn } = useAppLogic();
    
    return {
      balance,
      rateRubUSD,
      exchange,
      currency,
      earn
    }
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons {
  margin-top: 20px;
}

.btn {
  background: white;
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #42b983;
  border-radius: 3px;
  cursor: pointer;
}

.btn:hover {
  background: #42b98388;
}

.btn-second {
  background: #42b98322;
}
</style>
