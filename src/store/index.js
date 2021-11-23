import { defineStore } from 'pinia';
import groupBy from 'lodash/groupBy';

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      step: 0,
      lineItems: [],
    };
  },
  getters: {
    baseAmount: (state) => {
      return state.lineItems.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
    },
    groupLineItems: (state) => {
      return groupBy(state.lineItems, 'title');
    },
  },
  actions: {
    addToCart(item) {
      this.lineItems.push(item);
    },
    proceedToCheckout() {
      this.step = 1;
    },
  },
});
