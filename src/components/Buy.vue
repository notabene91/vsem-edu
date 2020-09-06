<template>
  <div class="buy" v-if="pickedDough">
    <button class="button buy__btn">
      Купить |
      <span class="buy__bold">{{totalAmount}} &#8381;</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    pickedDough() {
      return this.$store.getters.getPickedDough;
    },
    pizzaPriceValue() {
      return this.$store.getters.getPizzaPrice;
    },
    counterValue() {
      return this.$store.getters.getCounter;
    },
    doughPriceValue() {
      return this.$store.getters.getDoughPrice;
    },
    addPriceValue() {
      return this.$store.getters.getAddPrice;
    },
    totalAmount() {
      return (
        (this.pizzaPriceValue + this.doughPriceValue + this.addPriceValue) *
        this.counterValue
      );
    },
  },
};
</script>

<style  scoped>
.buy {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.buy__btn {
  font-size: 20px;
  height: 50px;
  width: 50%;
}
.buy__bold {
  font-weight: bold;
}
</style>