<template>
  <div v-if="pickedPizza" class="nutrients">
    <h2 class="nutrients__title">Пищевая ценность в 100г продукта:</h2>
    <div class="nutrients__container">
      <p class="nutrients__item">
        Белки
        <span class="nutrients__number">{{pizza.item_protein}}</span>
      </p>
      <p class="nutrients__item">
        Жиры
        <span class="nutrients__number">{{pizza.item_fats}}</span>
      </p>
      <p class="nutrients__item">
        Углеводы
        <span class="nutrients__number">{{pizza.item_carbohydrates}}</span>
      </p>
      <p class="nutrients__item">
        Калории
        <span class="nutrients__number">{{pizza.item_calories}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pizza() {
      return this.$store.getters.getPizzaData;
    },

    pickedPizza() {
      return this.$store.getters.getPicked;
    },
  },
};
</script>

<style scoped>
.nutrients {
  padding: 24px;
  border-bottom: 1px solid #2c3e50;
}

.nutrients__title {
  font-size: 21px;
  margin: 0 0 20px;
}
.nutrients__container {
  display: flex;
  justify-content: space-between;
}
.nutrients__item {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}
.nutrients__number {
  font-weight: bold;
}
</style>