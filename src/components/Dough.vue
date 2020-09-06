<template>
  <div v-if="pickedPizza"  class="dough">
    <h2 class="dough__title">{{pizza.addon_item[0].subcat_name}}</h2>
    <label
      v-for="dough in pizza.addon_item[0].sub_item"
      :key="dough.sub_item_id"
      class="dough__label"
    >
      <input
        type="radio"
        name="dough"
        class="dough__input"
        @change="[setDoughPrice(parseInt(dough.pretty_price)), pickDough()]"
      />
      <span class="dough__pseudo"></span>
      <span class="dough__type">{{dough.sub_item_name}}</span>
      <span class="dough__price">+ {{dough.pretty_price | convertToZero}}&#8381;</span>
    </label>
  </div>
</template>

<script>
export default {
  filters: {
    convertToZero: function (value) {
      if (value === "-") {
        return "0 ";
      } else return value.replace("Р", "");
    },
  },
  computed: {
    pizza() {
      return this.$store.getters.getPizzaData;
    },
    getDoughPrice() {
      return this.$store.getters.getDoughPrice;
    },
    pickedPizza() {
      return this.$store.getters.getPickedPizza;
    },
  },
  methods: {
    setDoughPrice(doughPrice) {
      if (!isNaN(doughPrice)) {
        this.$store.commit("setDoughPrice", doughPrice);
      }
      else {
        this.$store.commit("setDoughPrice", 0);
      }
    },
    pickDough() {
      this.$store.commit("pickDough");
    },
  },
};
</script>

<style  scoped>
.dough {
  padding: 24px;
}

.dough__title {
  text-align: left;
  margin: 0 0 30px;
}

.dough__label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #768797;
  box-sizing: border-box;
  padding: 15px 0;
  font-size: 22px;
}
.dough__type {
  width: 40%;
  text-align: left;

  cursor: pointer;
}

.dough__price {
  width: 40%;
  text-align: left;
}
.dough__input:checked + .dough__pseudo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ccircle r='65' cx='70' cy='70' fill='transparent' stroke='rgba(246, 241, 209)' stroke-width='25' /%3E%3C/svg%3E");
  background-color: #e47b3b;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.dough__input:checked ~ .dough__type {
  color: #2c3e50;
}
.dough__input:checked ~ .dough__price {
  color: #2c3e50;
}
.dough__input:focus + .dough__pseudo {
  box-shadow: 0 0 0 2px rgba(254, 39, 39, 0.3);
}
.dough__label:last-of-type {
  border-bottom: none;
}
.dough__input {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.dough__pseudo {
  background-color: #fff;
  display: inline-block;
  border-radius: 30px;
  width: 20px;
  height: 20px;
  border: 2px solid #e47b3b;
  cursor: pointer;
  margin-right: 8px;
}
</style>