<template>
  <nb-header>
    <nb-left>
      <nb-button transparent>
        <nb-icon :name="'menu'" :onPress="handleMenuPress" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title></nb-title>
    </nb-body>
    <nb-right />
  </nb-header>
</template>

<script>
import { DrawerActions } from 'react-navigation'

export default {
  name: 'NavMenu',
  props: ['navigation'],
  methods: {
    handleMenuPress() {
      this.navigation.dispatch(DrawerActions.toggleDrawer())
    }
  },
};
</script>

<style>

</style>
