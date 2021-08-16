import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

// define your typings for the store state
export interface State {
  user: Record<string, any> | null
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol('Store InjectionKey');

export const store = createStore<State>({
  state: {
    user: null,
  },
  getters: {
    isReady: (state) => {
      if (!state || !state.user) {
        return false;
      } else {
        return true;
      }
    }
  },
  actions: {
    initialize(context) {
      console.log('initialize');
      context.state.user = {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
      };
      console.log(context.state.user);
    },
  },
});
