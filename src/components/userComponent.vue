<template>
  <div class="user"
       @click="showId(user.repos_url)">
    <p>{{user.login}}</p>
    <img :src="user.avatar_url" :alt="user.login">
  </div>
</template>


<script>
export default {
  name: 'users-list',
  props: ['user'],
  data() {
    return {
      repositories: null
    }
  },
  methods: {
    async showId(url) {     
      
      return await fetch(url)
        .then(res => {
          if (res.ok) {
            res.json().then(res => {
              this.repositories = res;                 
              
              this.$emit('userRepos', {
                user: this.user
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
