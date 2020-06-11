<template>
  <div class="user">
    <h2>{{info.user.login}}</h2>
    <img class="avatar"
      :src="info.user.avatar_url" 
      alt="">
    <ul>
      <li v-for="repos in info.repos"
          :key="repos.id"
      >
      <a :href="repos.html_url">{{repos.name}}</a>        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-data',
  props: ['info']
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