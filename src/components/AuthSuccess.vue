<template> 
  <div> 
    <h1>Signup succeeded</h1> 
    <button @click='logOut'>Log out</button> 
    <hr> 
    <img :src="photo" style="height: 120px"> <br> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <p>{{userId}}</p> 
    <hr> 
    <pre>{{user}}</pre> 
    <ChoresList></ChoresList>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import firebase from 'firebase'
import { User } from 'firebase'
import ChoresList from './ChoresList.vue'

export default Vue.extend({
  components: {
    ChoresList
  },
  data() : {
    photo: string | null,
    userId: string | null,
    name: string | null,
    email: string | null,
    user: User | null
  } {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: null
    }
  },
  created() { 
    this.user = firebase.auth().currentUser; 
    if(this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email; 
      this.photo = this.user.photoURL; 
      this.userId = this.user.uid; 
    } 
  },
  methods: { 
    logOut() { 
      firebase.auth().signOut();
    } 
  },
});
</script>