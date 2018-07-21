import { StackNavigator } from 'vue-native-router'
import Login from './screens/Login.vue'

const AppNavigation = StackNavigator(
  {
    Login: Login,
  },
  {
    initialRouteName: 'Login',
  }
)

export default AppNavigation
