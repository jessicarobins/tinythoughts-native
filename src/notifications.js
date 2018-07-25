import { Permissions, Notifications } from 'expo'

async function requestMessagingPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  )

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (status !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    return Permissions.askAsync(Permissions.NOTIFICATIONS)
  }
}

async function getMessagingToken() {
  return Notifications.getExpoPushTokenAsync()
}
