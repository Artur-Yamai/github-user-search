import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      userData: {
          user: {
              login: '',
              avatar: ''
          },
          repos: {}
      }
    },
    getters: {
        userData(state) {
            return state.userData
        } 
    },
    mutations: {
        addRepos(state, urls) {
            state.userData = urls
        }
    },
    actions: {

    }
});