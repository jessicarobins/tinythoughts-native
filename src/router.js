import { NavigationActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function push({ name }, params) {
  console.log('is this being called? with what?', name)
  console.log('is this even anything?', _navigator)
  _navigator.dispatch(
    NavigationActions.navigate({
      name: 'App',
      params,
    })
  )
}

// add other navigation functions that you need and export them

export default {
  push,
  setTopLevelNavigator,
}
