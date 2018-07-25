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
      <nb-item :error="dirty && passwordConfirm.length === 0" floatingLabel>
        <nb-label>Confirm Password</nb-label>
        <nb-input
          :secure-text-entry="true"
          text-content-type="password"
          v-model="passwordConfirm" />
      </nb-item>
      <nb-item class="toc-container">
        <nb-text>
          By signing up, you agree to the
        </nb-text>
        <nb-button transparent class="button" :onPress="openTOC">
          <nb-text class="button-text toc">Terms & Conditions</nb-text>
        </nb-button>
        <nb-text>and</nb-text>
        <nb-button transparent class="button" :onPress="openPrivacyPolicy">
          <nb-text class="button-text privacy">
            Privacy Policy
          </nb-text>
        </nb-button><nb-text>.</nb-text>
      </nb-item>
      <nb-button block primary v-bind:onPress="handleSignUp" class="login">
        <nb-text>
          Sign up
        </nb-text>
      </nb-button>
    </nb-form>
  </nb-content>
</template>

<script>
import { mapActions } from 'vuex'
import { Toast } from 'native-base'
import { Constants, WebBrowser } from 'expo'

export default {
  name: 'Login',
  props: ['navigation'],
  data() {
    return {
      dirty: false,
      email: '',
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    ...mapActions([
      'userEmailSignUp',
    ]),
    formIsValid() {
      return this.email.length && this.password.length && this.passwordConfirm.length
    },
    handleSignUp() {
      if (this.formIsValid()) {
        return this.userEmailSignUp({
          user: {
            email: this.email,
            password: this.password
          }
        })
      }

      this.dirty = true
    },
    openTOC() {
      WebBrowser.openBrowserAsync('https://tinythoughts.me/terms-and-conditions')
    },
    openPrivacyPolicy() {
      WebBrowser.openBrowserAsync('https://tinythoughts.me/privacy-policy')
    }
  },
};
</script>

<style>
.content {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.toc-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
  border-bottom-width: 0px;
}

.login {
  margin-top: 20px;
}

.button {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  height: auto;
}

.button-text {
  margin-left: 0;
  padding-left: 0;
  padding-right: 0;
}

.toc {
  margin-right: 3px;
}

.privacy {
  margin-left: 3px;
}
</style>
