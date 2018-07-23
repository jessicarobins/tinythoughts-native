import { FirebaseService } from 'tt-module'
import store from './store'

import {
  VUE_APP_FIREBASE_API_KEY,
  VUE_APP_FIREBASE_AUTH_DOMAIN,
  VUE_APP_FIREBASE_DATABASE_URL,
  VUE_APP_FIREBASE_PROJECT_ID,
  VUE_APP_FIREBASE_STORAGE_BUCKET,
  VUE_APP_FIREBASE_MESSAGING_SENDER_ID
} from 'react-native-dotenv'

const firebase = new FirebaseService({
  apiKey: VUE_APP_FIREBASE_API_KEY,
  authDomain: VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: VUE_APP_FIREBASE_DATABASE_URL,
  projectId: VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_FIREBASE_MESSAGING_SENDER_ID
})

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log('We are authenticated now!')
    store.dispatch('onUserLogin', firebaseUser)
  }
})

export default firebase
