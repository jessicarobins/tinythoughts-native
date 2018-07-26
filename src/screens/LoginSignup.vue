<template>
  <nb-content padder class="content" :contentContainerStyle="{ alignItems: 'stretch', justifyContent: 'center', flex: 1 }">
    <image :source="logo" resizeMode="contain" :style="{ width: '100%', height: 200 }" />
    <nb-h1 class="logo">tinythoughts</nb-h1>
    <nb-text class="slogan">Because keeping a journal is hard</nb-text>
    <view>
      <nb-button block primary v-bind:onPress="handleSignup" class="login">
        <nb-text>
          Sign up
        </nb-text>
      </nb-button>
      <nb-button block primary transparent v-bind:onPress="handleLogin" class="login">
        <nb-text>
          Login
        </nb-text>
      </nb-button>
    </view>
  </nb-content>
</template>

<script>
import logo from '../assets/images/notebook.png'

export default {
  name: 'LoginSignup',
  props: ['navigation'],
  data() {
    return {
      logo
    }
  },
  methods: {
    handleLogin() {
      this.navigation.navigate('Login')
    },
    handleSignup() {
      this.navigation.navigate('Signup')
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

.login {
  margin-top: 20px;
}

.slogan {
  text-align: center;
  padding-bottom: 20px;
}

.logo {
  text-align: center;
  padding-top: 20px;
}
</style>
