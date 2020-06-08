<template>
<div class="">
  <v-users
    v-for="user in users"
    :key="user.id"
    :name="user.name"
    :price="user.price"
  ></v-users>
</div>
  
</template>

<script>
import vUsers from './components/userComponent.vue'

export default {
  name: 'App',
  components: {
    vUsers
  },
  data() {
    return {
      users: [
        {
          name: 'Name1',
          id: 1,
          price: 1000
        },
        {
          name: 'Name2',
          id: 2,
          price: 500
        },
        {
          name: 'Name3',
          id: 3,
          price: 1500
        },
        {
          name: 'Name3',
          id: 3,
          price: 1500
        }
      ]
    }
    
  }
}
</script>
