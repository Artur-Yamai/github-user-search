<template>
  <div class="user">
    <h3 class="name">{{name}}</h3>
    <img src="" :alt="name">
    <p>{{price}}</p>
  </div>
</template>


<script>
export default {
  name: 'v-item',
  props: ['name', 'price'],
  data() {
    return {
      
    }
  },
  methods: {
    lala() {
      console.log();
      
    }
  }
}
</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
}

.user {
  margin: 10px;
}

.name {
  color: rgb(5, 5, 153);
}

</style>
