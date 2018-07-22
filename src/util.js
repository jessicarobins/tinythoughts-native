import { Toast } from 'native-base'

export function displayMessage(text) {
  Toast.show({
    duration: 6000,
    text,
    position: 'bottom',
  })
}

export function displayError(err) {
  Toast.show({
    text: err.message,
    position: 'bottom',
    type: 'danger',
    duration: 6000,
  })
}
