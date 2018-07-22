import Vue from 'vue-native-core'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { modules } from 'tt-module'

import firebase from '../firebase'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const auth = modules.auth({ firebase })

export default new Vuex.Store({
  modules: {
    auth
  },
  plugins: debug ? [createLogger()] : [],
})
