import React from 'react'
import { Image, Text } from 'react-native'
import Lightbox from 'react-native-lightbox'
import { withNavigation } from 'react-navigation'

const LightboxView = ({ navigator, imageUrl, children }) => {
  const lightboxProps = { navigator }

  const renderContent = () => (
    <Image
      style={{ height: 300, width: '100%' }}
      source={{ uri: imageUrl }}
    />
  )

  if (children) {
    lightboxProps.renderContent = renderContent
  }

  return (
    <Lightbox {...lightboxProps}>
      {
        children ? children :
        renderContent()
      }
    </Lightbox>
  )
}

export default withNavigation(LightboxView)
