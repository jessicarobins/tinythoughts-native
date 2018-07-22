<template>
  <nb-content padder>
    <nb-spinner />
  </nb-content>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthLoading',
  props: ['navigation'],
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'userIsLoading'
    ]),
  },
  watch: {
    userIsLoading(value) {
      if (!value) {
        this.navigation.navigate(this.isAuthenticated ? 'App' : 'Auth')
      }
    }
  }
};
</script>

<style>

</style>
