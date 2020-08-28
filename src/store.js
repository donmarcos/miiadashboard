import Vue from 'vue'
import Vuex from 'vuex'
import {
  getTypes
} from '@/api/provtypes.api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    providertypes: {}
  },
  mutations: {
    SET_BAR_IMAGE(state, payload) {
      state.barImage = payload
    },
    SET_DRAWER(state, payload) {
      state.drawer = payload
    },
    SET_TYPES(state, data) {
      state.providertypes = data;
    }
  },
  actions: {
    async fetchProviderTypes({
      commit
    }) {
      try {
        console.log("store calling gettypes ")
        const response = await getTypes();
        commit('SET_TYPES', response.data);
      } catch (error) {
        // handle the error here
      }
    }

  },
  getters: {
    getProviderTypes(state) {
      return state.providertypes;
    }
  }
})
