<template>
  <div class="button-block">
    <button @click="$emit('btn-click-first')" :class="['button','button-block__btn', `${button}`]">-</button>
    <p :class="['button-block__counter', `${counterStyle} ` ]">{{counter}}</p>
    <button @click="$emit('btn-click-second')" :class="['button','button-block__btn', `${button}`]">+</button>
  </div>
</template>

<script>
export default {
  props: ["button", "counter", "counterStyle", "buttonBlock"],
  
};
</script> 

<style scoped>
.button-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-block__counter {
  box-sizing: border-box;
  margin: 0;
}

.button-clock__counter_pizza {
  width: 25%;
  font-size: 30px;
}

.button-block__btn:focus {
  box-shadow: 0 0 0 2px rgba(254, 39, 39, 0.3);
}
.button-block__btn_pizza {
  width: 30%;
  font-size: 30px;
}
.button-block__btn_add {
  width: 50px;
  font-size: 20px;
}
</style>