import React, { Component } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import store from '../store'
import { authPromise } from '../firebase'
import logo from '../assets/images/notebook.png'

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
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Image source={logo} resizeMode="contain" style={{ width: '100%', height: 200 }} />
      </View>
    );
  }
}

export default AuthLoading
