<template>
  <div class="user">
    <h2>{{userData.user.login}}</h2>
    <img class="avatar"
      :src="userData.user.avatar_url" 
      alt="">
    <ul>
      <li v-for="repos in userData.repos"
          :key="repos.id"
      >
      <a :href="repos.html_url">{{repos.name}}</a>        
      </li>
    </ul>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-data',
  computed: {
    ...mapGetters([
    'userData'
    ])
  }
}
</script>

<style scoped>
.user{
  width: 50%;
  height: 70vh;
  float: right;
  margin: 5px;
  padding: 5px;
}

.avatar {
  display: block;
  width: 40%;
  margin: 0 auto;
}

h2 {
  text-align: center;
}




</style>