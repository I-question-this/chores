<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
import Vue from "vue"
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import firebaseConfig from '../helpers/firebaseConfig';

export default Vue.extend({
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
});
</script>