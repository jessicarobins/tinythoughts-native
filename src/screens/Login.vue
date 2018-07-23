<template>
  <nb-content padder>
    <nb-spinner v-if="userIsLoading" />
    <nb-form v-else>
      <nb-item :error="dirty && email.length === 0">
        <nb-input
          floatingLabel
          placeholder="Email"
          text-content-type="email"
          v-model="email" />
      </nb-item>
      <nb-item :error="dirty && password.length === 0">
        <nb-input
          floatingLabel
          placeholder="Password"
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
import { mapActions, mapGetters } from 'vuex'
import { Toast } from 'native-base'

export default {
  name: 'Login',
  props: ['navigation'],
  data() {
    return {
      dirty: false,
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'encryptionKey',
      'userIsLoading',
    ]),
  },
  methods: {
    ...mapActions([
      'userEmailSignIn',
    ]),
    formIsValid() {
      return this.email.length && this.password.length
    },
    handleSignIn() {
      if (this.formIsValid()) {
        return this.userEmailSignIn({ user: { email: this.email, password: this.password } })
      }

      this.dirty = true
    },
  },
  watch: {
    encryptionKey(value) {
      if (value) {
        this.navigation.navigate('App')
      }
    }
  }
};
</script>

<style>
.login {
  margin-top: 20px;
}
</style>
