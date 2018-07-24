import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import store from '../store'
import { authPromise } from '../firebase'

class AuthLoading extends Component {
  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const user = await authPromise()
    this.props.navigation.navigate(!!user ? 'App' : 'Auth')
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthLoading
