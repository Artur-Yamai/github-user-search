<template>
  <div class="app">
    <h1>Github Search Users</h1>
    <div class="input-search">
      <input type="text" @keypress.13="searchUsers" v-model="search" />
      <p>found {{ totalUsers }} users</p>
    </div>

    <div class="search-result">
      <div class="users">
        <users-list
          class="user"
          v-for="user in users"
          :key="user.id"
          :user="user"
        ></users-list>
        <div class="add-block">
          <button class="add" type="submit" v-show="showButton" @click="showMoreUsers">Add users</button>
        </div>
      </div>

      <div class="user-data">
        <user-data></user-data>
      </div>
    </div>
  </div>
</template>

<script>
import UsersList from "./components/userComponent.vue";
import userData from "./components/userData.vue";

export default {
  name: "App",
  components: {
    UsersList,
    userData
  },
  data() {
    return {
      search: "",
      users: null,
      userPerPage: 20,
      showButton: false,
      totalUsers: 0
    };
  },

  methods: {
    async loadUsers() {
      if (this.search != "") {
        return await fetch(
          `https://api.github.com/search/users?q=${this.search}&per_page=${this.userPerPage}`
        ).then(response => {
          if (response.ok) {
            response.json().then(res => {
              this.users = res.items;
              this.totalUsers = res.total_count;
              this.toShow();
            });
          }
        });
      }
    },

    toShow() {
      this.showButton = this.totalUsers >= this.userPerPage;
    },

    searchUsers() {
      this.users = "";
      this.userPerPage = 20;
      this.loadUsers();
    },

    showMoreUsers() {
      this.userPerPage += 20;
      this.loadUsers();
      this.toShow();
    }
  }
};
</script>

<style scoped>


.app {
  background-color: rgb(30, 30, 30);
  padding-top: 10px;
}

h1 {
  text-align: center;
  font-family: Skywalker, 'Comic Sans MS', cursive;
  color: white;
}

input {
  width: 40%;
  text-align: center;
}

.input-search {
  text-align: center;
  color: white;
  margin: 5px;
}

.search-result {
  width: 100%;
  min-height: 10px;
}

.users {
  position: relative;
  float: left;
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 40px);
  margin-bottom: 25px;
  padding-left: 25px;
  padding-bottom: 30px;
}

.users .user {
  width: calc(20% - 30px);
}

.add-block {
  position: absolute;
  bottom: 0;
  left: calc(50% - 40px);
  width: 100px;
}
</style>
