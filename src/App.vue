<template>
<div class="">
  <h1>Github Search Users</h1>
  <input type="text" 
    @keypress.13="searchInput"
    v-model="search">

  <div class="users">    
    <v-user
      class="user"
      v-for="user in users"
      :key="user.id"
      :login="user.login"
      :img="user.avatar_url"
    ></v-user>
  </div>
  
</div>
  
</template>

<script>
import vUser from './components/userComponent.vue'

export default {
  name: 'App',
  components: {
    vUser
  },
  data() {
    return {
      search: '',
      users: null
    }
    
  },

  methods: {

    async searchInput() {
      
      if (this.search != '') {
        return await fetch(`https://api.github.com/search/users?q=${this.search}`)
          .then(response => {                         
              if (response.ok) {
                response.json().then(res => {
                  this.users = res.items
                  
                  
                })
                
              }               
            })

            // &per_page=${USER_PER_PAGE}&page=${this.currentPage}
      }

      
    }
  }
}
</script>

<style scoped>

.users {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;
}

.user {
  margin: 0 10px;
  width: calc(20% - 20px);
}

</style>
