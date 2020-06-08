<template>
<div class="">
  <input type="text" v-model="gitData">
  <vitem
    :gitDAta="gitData"  
  ></vitem>
</div>
  
</template>

<script>
import {vitem} from './components/component.vue'

export default {
  name: 'App',
  components: {
    vitem
  },
  data() {
    return {
      gitData: [
        {
          title: 'Name1',
          id: 1,
          price: 1000
        },
        {
          title: 'Name2',
          id: 2,
          price: 500
        },
        {
          title: 'Name3',
          id: 3,
          price: 1500
        }
      ]
    }
    
  }
}
</script>

