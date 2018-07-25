<template>
  <nb-header>
    <nb-left>
      <nb-button transparent>
        <nb-icon :name="'menu'" :onPress="handleMenuPress" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>
        <nb-thumbnail :source="logo" small />
      </nb-title>
    </nb-body>
    <nb-right />
  </nb-header>
</template>

<script>
import { DrawerActions } from 'react-navigation'
import logo from '../assets/images/notebook.png'

export default {
  name: 'NavMenu',
  props: ['navigation'],
  data() {
    return {
      logo
    }
  },
  methods: {
    handleMenuPress() {
      this.navigation.dispatch(DrawerActions.toggleDrawer())
    },
  },
};
</script>

<style>

</style>
