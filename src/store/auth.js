// store/auth.js
const namespaced = {
  namespaced: true,
};

const state = {
  users: [], // Store user data
  loggedInUser: null, // Add loggedInUser state
  lastLoggedInUser: null, // Add lastLoggedInUser state
};

const mutations = {
  addUser(state, user) {
    state.users.push(user);
  },
  setLoggedInUser(state, user) {
    state.loggedInUser = user;
  },
  // Add a mutation to store the logged-in username
  setLoggedInUsername(state, username) {
    state.loggedInUsername = username;
  },
  setLastLoggedInUser(state, user) {
    state.lastLoggedInUser = user;
  },
};

const actions = {
  signUp({ commit, state }, user) {
    // Check if the user already exists
    const existingUser = state.users.find((u) => u.username === user.username);

    if (existingUser) {
      // User already exists, handle accordingly
      alert('User already exists.');
    } else {
      commit('addUser', user);
      commit('setLoggedInUser', user); // Set loggedInUser upon successful signup
      alert('SignUp Successfully');
    }
  },
  login({ commit, state }, credentials) {
    return new Promise((resolve, reject) => {
      // Check if the user with provided credentials exists
      const user = state.users.find(
        (u) => u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        // If the login is successful, set the loggedInUser and return the user data
        commit('setLoggedInUser', user);
        commit('setLoggedInUsername', user.username); // Store the username
        commit('setLastLoggedInUser', state.loggedInUser);
        resolve(user);
      } else {
        reject('error');
      }
    });
  },
};

export default {
  namespaced,
  state,
  mutations,
  actions,
};
