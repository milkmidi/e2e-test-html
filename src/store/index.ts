import { defineStore } from 'pinia';
import groupBy from 'lodash/groupBy';
import { type Product } from '@/services/api';

type Store = {
  lineItems: Product[];
};

export const useCartStore = defineStore('cart', {
  state: (): Store => {
    return {
      lineItems: [] as Product[],
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
    hasItems: (state) => {
      return state.lineItems.length > 0;
    },
  },
  actions: {
    addToCart(item: Product) {
      this.lineItems.push(item);
    },
    proceedToCheckout() {
      console.log('proceedToCheckout');
      return Promise.resolve();
    },
  },
});
