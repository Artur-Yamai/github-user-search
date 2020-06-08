<template>
  <div class="get-input">
    <button type="submit" @click="lala">+</button>
    {{gitData}}
  </div>
</template>


<script>
export default {
  name: 'v-item',
  props: {
    gitData: String
  },
  data() {
    return {
      
    }
  },
  methods: {
    lala() {
      // console.log(gitData);
      
    }
  }
}
</script>


<style scoped>

</style>
