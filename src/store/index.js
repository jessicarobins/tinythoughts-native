import Vue from 'vue-native-core'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { modules } from 'tt-module'

import firebase from '../firebase'
import router from '../router'
import { displayError } from '../util'
import authActions from './auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const auth = modules.auth({ firebase, router, displayError, ...authActions })
const lines = modules.lines({ firebase })
const prompts = modules.prompts({ firebase })

export default new Vuex.Store({
  modules: {
    auth,
    lines,
    prompts,
    site: modules.site
  },
})

