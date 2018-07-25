<template>
  <view class="spinner-container" :style="{ height }">
    <nb-spinner />
  </view>
</template>

<script>
import { Dimensions, Platform } from 'react-native'
const deviceHeight = Dimensions.get('window').height

export default {
  name: 'FullPageSpinner',
  data() {
    return {
      height: deviceHeight - 150
    }
  }
}
</script>

<style>
.spinner-container {
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>

