<template>
  <div class="user">
    <h2>{{userData.user.login}}</h2>
    <img class="avatar"
      :src="userData.user.avatar_url" 
      alt="">
    <div class="repositories">
      <span class="repository"
          v-for="repos in userData.repos"
          :key="repos.id"
      >
      <a :href="repos.html_url">{{repos.name}}</a>        
      </span>
    </div>
    
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
  min-height: 100px;
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

.repositories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 5px;
  margin-top: 10px;
}

.repository {
  display: inline-block;
  margin: 0 5px 10px;
}

.repository a {

}

</style>