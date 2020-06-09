<template>
  <div class="user">
    <p>{{login}}</p>
    <img :src="img" alt="avatar">
  </div>
</template>


<script>
export default {
  name: 'v-item',
  props: ['login', 'img'],
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>


<style scoped>
img {
  width: 100%;
}
</style>
