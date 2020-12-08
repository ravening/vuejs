import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user: null,
    foo: 'users-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    // root getters are avaiable in modules as third parameter
    // foo(state, getters, rootState)
    foo(state) {
      return `users-getter/${state.foo}`;
    },
  },
  actions: {
    // rootstate can be accessed as
    // signin({commit, rootstate})
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
