<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">

    <div>Курс: <span>1 USD : 75 RUB</span></div>
    <div>Баланс: <span>123.33 USD</span></div>

    <div>
      <button class="btn">Поменять</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  setup() {
    console.log('Vue setup');
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
