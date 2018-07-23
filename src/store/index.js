import Vue from 'vue-native-core'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { modules } from 'tt-module'

import firebase from '../firebase'
import router from '../router'
import { displayError } from '../util'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const auth = modules.auth({ firebase, router, displayError })
const lines = modules.lines({ firebase })

export default new Vuex.Store({
  modules: {
    auth,
    lines,
    site: modules.site
  },
})
