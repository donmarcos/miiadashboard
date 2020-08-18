<template>
  <div id="app">
    <amplify-authenticator v-bind:signInConfig="signInConfig">
     <amplify-sign-in  header-text="MIIA Dashboard Sign In" slot="sign-in"></amplify-sign-in>
       <router-view />
    </amplify-authenticator>
  </div>
</template>

<script>
import { AmplifyAuthenticator, AmplifySignIn } from "aws-amplify-vue"

export default {
  name: "App",
  components: { AmplifyAuthenticator, AmplifySignIn },
  data() {
    return {
      signInConfig: {
        isSignUpDisplayed: true,
      },
    }
  },
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
