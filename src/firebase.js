import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/messaging'
import 'firebase/storage'
import {
  VUE_APP_FIREBASE_API_KEY,
  VUE_APP_FIREBASE_AUTH_DOMAIN,
  VUE_APP_FIREBASE_DATABASE_URL,
  VUE_APP_FIREBASE_PROJECT_ID,
  VUE_APP_FIREBASE_STORAGE_BUCKET,
  VUE_APP_FIREBASE_MESSAGING_SENDER_ID
} from 'react-native-dotenv'

firebase.initializeApp({
  apiKey: VUE_APP_FIREBASE_API_KEY,
  authDomain: VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: VUE_APP_FIREBASE_DATABASE_URL,
  projectId: VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_FIREBASE_MESSAGING_SENDER_ID
})

const plugins = {}

// database
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
plugins.db = db

// functions
export const functions = {
  addSubscription: firebase.functions().httpsCallable('addSubscription'),
  cancelSubscription: firebase.functions().httpsCallable('cancelSubscription'),
  getSubscription: firebase.functions().httpsCallable('getSubscription'),
  resubscribe: firebase.functions().httpsCallable('resubscribe'),
  setEncryptionKey: firebase.functions().httpsCallable('setEncryptionKey'),
}

// storage
plugins.storage = firebase.storage()

export default firebase

export { plugins }
