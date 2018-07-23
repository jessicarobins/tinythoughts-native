import React, { Component } from 'react'
import { DrawerNavigator, StackNavigator, SwitchNavigator } from 'vue-native-router'
import router from './router'
import AuthLoading from './screens/AuthLoading.vue'
import Home from './screens/Home.vue'
import Login from './screens/Login.vue'
import NavMenu from './components/NavMenu.vue'
import SidebarDrawer from './components/SidebarDrawer.vue'

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SidebarDrawer {...props} />
  }
);

const AppStack = StackNavigator({
    Drawer: {
      screen: Drawer
    },
  },
  {
    navigationOptions: {
      header: (props) => <NavMenu {...props} />
    }
  }
);

const AuthStack = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  }
});

const TopLevelNavigator = SwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    AuthLoading,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

class AppNavigation extends Component {
  setNavigator(navigatorRef) {
    console.log('setting navigatorRef')
    router.setTopLevelNavigator(navigatorRef)
  }

  render() {
    return (
      <TopLevelNavigator
        ref={this.setNavigator}
      />
    );
  }
}

export default AppNavigation
