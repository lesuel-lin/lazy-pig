import message from '@/store/modules/message.js'
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    message
  },
  strict: true
})

export default store