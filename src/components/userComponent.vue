<template>
  <div class="user"
       @click="openCard(user.repos_url)">
    <p>{{user.login}}</p>
    <img :src="user.avatar_url" :alt="user.login">
  </div>
</template>


<script>
export default {
  name: 'users-list',
  props: ['user'],
  methods: {
    async openCard(url) {     
      
      return await fetch(url)
        .then(res => {
          if (res.ok) {
            res.json().then(res => {                
              this.$emit('userRepos', {
                user: this.user,
                repos: res
              })
            })
          }       
        })   
    }
  }
}
</script>


<style scoped>


img {
  width: 100%;
}

p {
  widows: 80%;
  text-align: center;

}
</style>
