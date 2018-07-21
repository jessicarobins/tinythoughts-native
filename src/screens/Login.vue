<template>
  <nb-form>
    <nb-item>
      <nb-input placeholder="Email" />
    </nb-item>
    <nb-item last>
      <nb-input placeholder="Password" />
    </nb-item>
  </nb-form>
</template>

<script>
export default {
  name: 'Login'
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
