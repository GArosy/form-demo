import Vue from 'vue';
import Vuex from 'vuex';
import Form from './form';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Form
  }
})