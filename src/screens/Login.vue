<template>
  <nb-content padder class="content">
    <nb-form>
      <nb-item :error="dirty && email.length === 0" floatingLabel>
        <nb-label>Email</nb-label>
        <nb-input
          text-content-type="email"
          v-model="email" />
      </nb-item>
      <nb-item :error="dirty && password.length === 0" floatingLabel>
        <nb-label>Password</nb-label>
        <nb-input
          :secure-text-entry="true"
          text-content-type="password"
          v-model="password" />
      </nb-item>
      <nb-button block primary v-bind:onPress="handleSignIn" class="login">
        <nb-text>
          Login
        </nb-text>
      </nb-button>
    </nb-form>
  </nb-content>
</template>

<script>
import { mapActions } from 'vuex'
import { Toast } from 'native-base'

export default {
  name: 'Login',
  props: ['navigation'],
  data() {
    return {
      dirty: false,
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions([
      'userEmailSignIn',
    ]),
    formIsValid() {
      return this.email.length && this.password.length
    },
    async handleSignIn() {
      if (this.formIsValid()) {
        return this.userEmailSignIn({
          user: {
            email: this.email,
            password: this.password
          }
        })
      }

      this.dirty = true
    },
  },
};
</script>

<style>
.content {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.login {
  margin-top: 20px;
}
</style>
