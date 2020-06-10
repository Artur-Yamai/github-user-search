<template>
  <div class="user">
    <h2>{{dataUser.login}}</h2>
    <img class="avatar"
      :src="dataUser.avatar_url" 
      alt="">
    <p></p>
    
  </div>
</template>

<script>
export default {
  name: 'user-data',
  props: ['dataUser']
}
</script>

<style scoped>
.user{
  width: 50%;
  height: 70vh;
  float: right;
  border: 1px solid black;
  border-radius: 5px;
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