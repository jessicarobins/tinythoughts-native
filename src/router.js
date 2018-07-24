import { NavigationActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef
}

function push({ name }, params) {
  console.log('attempting to push route ', name)
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName: name,
      params,
    })
  )
}

// add other navigation functions that you need and export them

export default {
  push,
  setTopLevelNavigator,
}
