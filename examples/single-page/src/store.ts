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
    isReady: (state) => !!state.user,
  },
  actions: {
    initialize(context) {
      context.state.user = {
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
      }
    },
  },
});
