import { ViteSSG } from 'vite-ssg/single-page'
import { key, store } from './store';
import App from './App.vue'

ViteSSG(
  App,
  ({ app, initialState }) => {
    app.use(store, key);

    if (import.meta.env.SSR) {
      // eslint-disable-next-line no-param-reassign
      initialState.store = store.state;
    } else {
      store.replaceState(initialState.store);
    }

    if (!store.getters.isReady) {
      store.dispatch('initialize');
    }
  },
)
