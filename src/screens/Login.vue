<template>
  <nb-content padder>
    <nb-form>
      <nb-item>
        <nb-input placeholder="Email" text-content-type="email" />
      </nb-item>
      <nb-item last>
        <nb-input placeholder="Password" :secure-text-entry="true" text-content-type="password" />
      </nb-item>
      <nb-button block primary>
        <nb-text>
          Login
        </nb-text>
      </nb-button>
    </nb-form>
  </nb-content>
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
