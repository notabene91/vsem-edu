<template>
  <div class="pizza">
    <img class="pizza__image" alt="Пицца." :src="pizza.photo" />
    <div class="pizza__container">
      <h2 class="pizza__title">"{{pizza.item_name}}"</h2>
      <p class="pizza__subtitle">{{pizza.item_description}}</p>
      <label v-for="price in pizza.prices" :key="price.size_id" class="pizza__label">
        <input
          @change="[setPizzaPrice(parseInt(price.price)), pickPizza()]"
          type="radio"
          name="size"
          class="pizza__input"
        />
        <span class="pizza__pseudo"></span>
        <span class="pizza__size">{{price.size}}</span>
        <span class="pizza__price">{{price.price}} &#8381;</span>
      </label>
      <buttonblock
        :counterStyle="'button-clock__counter_pizza'"
        :button="'button-block__btn_pizza'"
        :counter="getCounter"
        @btn-click-first="decrement"
        @btn-click-second="increment"
      />
    </div>
  </div>
</template>

<script>
import ButtonBlock from "./ButtonBlock";

export default {
  components: {
    buttonblock: ButtonBlock,
  },
  computed: {
    pizza() {
      return this.$store.getters.getPizzaData;
    },
    getCounter() {
      return this.$store.getters.getCounter;
    },
    getPizzaPrice() {
      return this.$store.getters.getPizzaPrice;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    setPizzaPrice(pizzaPrice) {
      if (!isNaN(pizzaPrice)) {
        this.$store.commit("setPizzaPrice", pizzaPrice);
      } else {
        this.$store.commit("setPizzaPrice", 0);
      }
    },
    pickPizza() {
      this.$store.commit("pickPizza");
    },
  },
};
</script>
  
<style  scoped>
.pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pizza__container {
  box-sizing: border-box;
  padding: 60px 24px 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.pizza__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #768797;
  box-sizing: border-box;
  padding: 15px 0;
  font-size: 22px;
}

.pizza__input:checked + .pizza__pseudo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ccircle r='65' cx='70' cy='70' fill='transparent' stroke='rgba(246, 241, 209)' stroke-width='25' /%3E%3C/svg%3E");
  background-color: #e47b3b;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.pizza__input:focus + .pizza__pseudo {
  box-shadow: 0 0 0 1px rgba(254, 39, 39, 0.5);
}
.pizza__input:checked ~ .pizza__size {
  color: #2c3e50;
}
.pizza__input:checked ~ .pizza__price {
  color: #2c3e50;
}

.pizza__label:last-of-type {
  margin-bottom: 30px;
}
.pizza__input {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.pizza__pseudo {
  background-color: #fff;
  border-radius: 30px;
  width: 20px;
  height: 20px;
  border: 2px solid #e47b3b;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 2px;
}
.pizza__size {
  cursor: pointer;
  margin-right: 60%;
}
.pizza__image {
  object-fit: cover;
  width: 60%;
}
.pizza__title {
  align-self: flex-start;
  margin: 0 0 20px;
  font-size: 32px;
}
.pizza__subtitle {
  align-self: flex-start;
  margin: 0 0 30px;
  font-size: 18px;
  margin-left: 16px;
}
</style>