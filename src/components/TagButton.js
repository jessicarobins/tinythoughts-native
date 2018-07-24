import React, { Component } from 'react'
import { Button, Text } from 'native-base'
import { withNavigation } from 'react-navigation'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    height: 'auto',
  },
  text: {
    marginLeft: 0,
    marginRight: 3,
    paddingLeft: 0,
    paddingRight: 0,
  }
})

const TagButton = ({ navigation, tag }) => {
  function navigate() {
    const param = tag.replace('#', '')
    console.log('attempting to navigate to ', param)
    navigation.navigate('Home', { tag: param })
    console.log('navigation after', navigation)
  }

  return (
    <Button
      style={styles.button}
      transparent
      primary
      title={tag}
      onPress={navigate}>
      <Text style={styles.text}>{ tag }</Text>
    </Button>
  )
}

export default withNavigation(TagButton)
