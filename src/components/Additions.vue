<template>
  <div v-if="pickedDough" class="additions">
    <h2 class="additions__title">{{pizza.addon_item[1].subcat_name}}</h2>

    <label
      class="additions__label"
      v-for="add in pizza.addon_item[1].sub_item"
      :key="add.sub_item_id"
    >
      <input
        @change="[setAddPrice(parseInt(add.price)), pickAdd(), toggleChecked()]"
        type="checkbox"
        name="additions"
        class="additions__input"
        :value="add.price"
      />
      <span class="additions__pseudo"></span>
      <span class="additions__type">{{add.sub_item_name}}</span>
      <span class="additions__price">+ {{add.price}} &#8381;</span>
      <buttonblock
        v-if="checked"
        :button="'button-block__btn_add'"
        :counter="getCounter()- 1"
        style="width: 40%"
      />
    </label>
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
    pickedDough() {
      return this.$store.getters.getPickedDough;
    },
  },
  methods: {
    setAddPrice(addPrice) {
      if (event.target.checked) {
        this.$store.commit("setAddPrice", addPrice);
      } else {
        this.$store.commit("setAddPrice", -addPrice);
      }
    },
    getCounter() {
      return this.$store.getters.getCounter;
    },
    pickAdd() {
      this.$store.commit("pickAdd");
    },
    toggleChecked() {
      this.checked = true;
    },
  },
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style  scoped>
.additions {
  padding: 24px;
}

.additions__title {
  text-align: left;
  margin: 0 0 30px;
}

.additions__label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #768797;
  box-sizing: border-box;
  padding: 15px 0;
  font-size: 22px;
}
.additions__type {
  width: 40%;
  text-align: left;
}

.additions__price {
  width: 40%;
  text-align: left;
  margin-right: -10%;
}
.additions__input:checked + .additions__pseudo {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Ccircle r='65' cx='70' cy='70' fill='transparent' stroke='rgba(246, 241, 209)' stroke-width='25' /%3E%3C/svg%3E");
  background-color: #e47b3b;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.additions__input:checked ~ .additions__type {
  color: #2c3e50;
}
.additions__input:checked ~ .additions__price {
  color: #2c3e50;
}
.additions__input:focus + .additions__pseudo {
  box-shadow: 0 0 0 1px rgba(254, 39, 39, 0.5);
}
.additions__label:last-of-type {
  border-bottom: none;
}
.additions__input {
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.additions__pseudo {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 2px solid #e47b3b;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 5px;
  background-color: #fff;
}
</style>