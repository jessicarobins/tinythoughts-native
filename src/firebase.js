import firebase from 'react-native-firebase'
import store from './store'

firebase.firestore().settings({ timestampsInSnapshots: true })

export function authPromise() {
  return new Promise(async (resolve, reject) => {
    firebase.auth().onAuthStateChanged(async(firebaseUser) => {
      if (firebaseUser) {
        console.log('We are authenticated now!')
        await store.dispatch('onUserLogin', firebaseUser)
      } else {
        console.log('not authenticated')
        store.commit('decrementUserLoading')
      }
      resolve(firebaseUser)
    })
  })
}

export default firebase
