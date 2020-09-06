import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '../api/index'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    counter: 1,
    pickedPizza: false,
    pickedDough: false,
    pizzaData: {},
    pizzaPrice: 0,
    doughPrice: 0,
    addPrice: []
  },
  mutations: {
    setData(state, value) {
      return state.pizzaData = value
    },
    increment: state => state.counter++,
    decrement: state => {
      if (state.counter > 1) {
        state.counter--
      }
    },
    pickPizza: state => {
      state.pickedPizza = true;
    },
    pickDough: state => {
      state.pickedDough = true;
    },
    pickAdd: state => {
      state.pickedAdd = true;
    },
    setPizzaPrice: (state, num) => {
      state.pizzaPrice = num;
    },
    setDoughPrice: (state, num) => {
      state.doughPrice = num;
    },
    setAddPrice: (state, num) => {
      state.addPrice.push(num)
    }
  },
  actions: {
    fetchData(state) {
      return axiosInstance.get()
        .then(res => {
          return state.commit('setData', res.data.details.data)
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    getCounter(state) {
      return state.counter;
    },
    getPickedPizza(state) {
      return state.pickedPizza;
    },
    getPickedDough(state) {
      return state.pickedDough;
    },
    getPizzaData(state) {
      return state.pizzaData;
    },
    getPizzaPrice(state) {
      return state.pizzaPrice;
    },
    getDoughPrice(state) {
      return state.doughPrice;
    },
    getAddPrice(state) {
      return state.addPrice.reduce((prev, sum) => (prev + sum), 0);
    },
  },
  modules: {
  }
})
