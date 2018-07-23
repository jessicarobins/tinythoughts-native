<template>
  <nb-content padder class="content" :contentContainerStyle="{ alignItems: 'stretch', justifyContent: 'center', flex: 1 }">
    <image :source="logo" resizeMode="contain" :style="{ width: '100%', height: 200 }" />
    <nb-h1 class="logo">tinythoughts</nb-h1>
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
import { Image } from 'react-native'
import { Toast } from 'native-base'
import logo from '../assets/images/notebook.png'

export default {
  name: 'Login',
  props: ['navigation'],
  components: {
    Image
  },
  data() {
    return {
      dirty: false,
      email: '',
      password: '',
      logo
    }
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

.logo {
  font-family: SpecialElite;
  text-align: center;
  padding-top: 20px;
}
</style>
