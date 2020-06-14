<template>
  <div class="user"
       @click="openCard(user.repos_url)">
    <p class="login">{{user.login}}</p>
    <img class="avatar" :src="user.avatar_url" :alt="user.login">
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

.user {
  margin: 0 10px 10px;
  
}

.avatar {
  width: 100%;
}

.login {
  widows: 80%;
  text-align: center;

}
</style>
