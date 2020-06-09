<template>
<div class="">
  <h1>Github Search Users</h1>
  <input type="text" 
    @keypress.13="searchUsers"
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

  <div class="add-block">
    <button class="add"
              type="submit" 
              v-show="showButton"
              @click="showMoreUsers"
      >Add users</button>
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
      users: null,
      userPerPage: 20,      
      showButton: true
    }
    
  },

  methods: {

    async loadUsers() {
      
      if (this.search != '') {
        return await fetch(`https://api.github.com/search/users?q=${this.search}&per_page=${this.userPerPage}`)
          .then(response => {   
              console.log(response.total_count);
                           
              if (response.ok) {
                response.json().then(res => {
                  console.log(response.total_count);
                  this.users = res.items;        
                  console.log(res.items)
                })
                
              }               
            })
            //&page=${this.currentPage}
      }
    },

    searchUsers() {
      this.users = '';
      this.userPerPage = 20;
      this.loadUsers();
    },

    showMoreUsers() {
      this.userPerPage += 20;
      this.loadUsers()
      
    }
  }
}
</script>

<style scoped>

.users {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto 25px;
}

.user {
  margin: 0 10px 10px;
  width: calc(20% - 30px);
}

.add-block {
  text-align: center;
}

</style>
