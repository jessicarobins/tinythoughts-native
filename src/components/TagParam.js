import React from 'react'
import { Button, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

// this is the dumbest hack
const TagParam = ({ navigation }) => {
  const tag = navigation.getParam('tag', null)
  console.log('tag? ', tag)
  return <Text>{ tag }</Text>
}
export default withNavigation(TagParam)
