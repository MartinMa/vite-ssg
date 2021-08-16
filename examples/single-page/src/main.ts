import { ViteSSG } from 'vite-ssg/single-page'
import { key, store } from './store';
import App from './App.vue'

export const createApp = ViteSSG(
  App,
  ({ app, initialState }) => {
    app.use(store, key);

    if (import.meta.env.SSR) {
      // eslint-disable-next-line no-param-reassign
      initialState.storeState = store.state;
    } else {
      if (initialState.storeState) {
        store.replaceState(initialState.storeState);
      }
    }

    console.log('isReady', store.getters.isReady);
    if (!store.getters.isReady) {
      store.dispatch('initialize');
    }
  },
)
