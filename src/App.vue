<template>
<div class="">
  <h1>Github Search Users</h1>
  
  <div class="input-search">
    <input type="text" 
      @keypress.13="searchUsers"
      v-model="search">
      <p>found {{ totalUsers }} users</p>
  </div>

  <div class="users">   
      <v-user
      class="user"
      v-for="user in users"
      :key="user.id"
      :user="user"
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
      showButton: false,
      totalUsers: 0
    }
    
  },

  methods: {

    async loadUsers() {
      
      if (this.search != '') {
        return await fetch(`https://api.github.com/search/users?q=${this.search}&per_page=${this.userPerPage}`)
          .then(response => {   
                           
              if (response.ok) {
                
                response.json().then(res => {
                  this.users = res.items;   
                  this.totalUsers = res.total_count;
                  this.toShow();
                  
                })
                
              }               
            })
      }
    },

    toShow() {
      this.showButton = this.totalUsers >= this.userPerPage
    },

    searchUsers() {
      this.users = '';
      this.userPerPage = 20;
      this.loadUsers();
    },

    showMoreUsers() {
      this.userPerPage += 20;
      this.loadUsers();
      this.toShow();     

    },
  }
}
</script>

<style scoped>

h1 {
  text-align: center;
}

input {
  width: 40%;
  text-align: center;
}

.input-search {
  text-align: center;
}

.users {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto 25px;
}

.user {
  margin: 0 10px 10px;
  width: calc(20% - 20px);
}

.add-block {
  text-align: center;
}

</style>
