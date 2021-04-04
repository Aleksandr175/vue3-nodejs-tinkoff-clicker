<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">

    <div>Курс: <span>1 USD : {{ rateRubUSD }} RUB</span></div>
    <div>Баланс: <span>{{ balance }} {{ currency }}</span></div>

    <div>
      <button class="btn" @click="exchange()">Поменять</button>
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
    const { balance, rateRubUSD, exchange, currency } = useAppLogic();
    
    return {
      balance,
      rateRubUSD,
      exchange,
      currency
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
</style>
