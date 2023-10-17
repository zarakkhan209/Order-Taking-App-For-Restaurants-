import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import auth from './auth';

const vuexLocalStorage = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
});

const store = createStore({
  modules: {
    auth, // Include your authentication module
  },
  state() {
    return {
      orderTexts: [],
      loggedInUsername: [], // Add a property to store the username
    };
  },
  mutations: {
    addOrderText(state, text) {
      state.orderTexts.push(text);
    },
    setLoggedInUsername(state, username) {
      state.loggedInUsername.push(username);
    },
  },
  actions: {
    addOrder({ commit }, text) {
      commit('addOrderText', text);
    },
    setLoggedInUser({ commit }, username) {
      commit('setLoggedInUsername', username);
    },
  },
  plugins: [vuexLocalStorage.plugin],
});

export default store;
