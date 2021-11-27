import { defineStore } from 'pinia';
import groupBy from 'lodash/groupBy';
import type { ProductType} from './store.types';

type Store = {
  step: number;
  lineItems: ProductType[];
}

export const useCartStore = defineStore('cart', {
  state: (): Store => {
    return {
      step: 0,
      lineItems: [] as ProductType[],
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
    addToCart(item:ProductType) {
      this.lineItems.push(item);
    },
    proceedToCheckout() {
      this.step = 1;
    },
  },
});
