<template>
  <div id="app">
    <pizza />
    <nutrients />
    <dough />
    <additions />
    <buy />
  </div>
</template>

<script>
import Pizza from "./components/Pizza";
import Nutrients from "./components/Nutrients";
import Dough from "./components/Dough";
import Additions from "./components/Additions";
import Buy from "./components/Buy";
export default {
  name: "App",
  components: {
    pizza: Pizza,
    nutrients: Nutrients,
    dough: Dough,
    additions: Additions,
    buy: Buy,
  },
  created() {
    this.$store.dispatch('fetchData')
  }
};
</script>

<style>
body {
  background-image: url(./assets/background.jpg);
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(
    to bottom,
    #fff 0% 40%,
    #fcb69f  150%
  );
  max-width: 425px;
  margin: 0 auto;
  border-radius: 30px;
}
.button {
  background-color: transparent;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 30px;
  border: 2px solid #e47b3b;
  color: #2c3e50;
}
.button:focus {
  box-shadow: 0 0 0 2px rgba(254, 39, 39, 0.3);
}
.button:hover {
  background-color: #fff;
}
.button:active {
  box-shadow: 2px 2px 5px #e47b3b;
}
</style>
