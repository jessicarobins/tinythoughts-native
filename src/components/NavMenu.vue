<template>
  <nb-header>
    <nb-left>
      <nb-button transparent>
        <nb-icon :name="'menu'" />
      </nb-button>
    </nb-left>
    <nb-body>
      <nb-title>{{ title }}</nb-title>
    </nb-body>
    <nb-right />
  </nb-header>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['navigation'],
  computed: {
    title() {
      return this.navigation.scene.route.routeName
    }
  }
};
</script>

<style>

</style>
