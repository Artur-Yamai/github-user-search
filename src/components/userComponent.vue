<template>
  <div class="user"
       @click="showId(user.repos_url)">
    <p>{{user.login}}</p>
    <img :src="user.avatar_url" :alt="user.login">
    <p>
      <span v-for="rep in repositories"
            :key="rep.id"
      >        
         <a :href="rep.html_url">{{rep.name}}</a> 
      </span>
    </p>
  </div>
</template>


<script>
export default {
  name: 'v-user',
  props: ['user'],
  data() {
    return {
      repositories: null
    }
  },
  methods: {
    async showId(url) {
      
      
      return await fetch(url)
        .then(res => {          

          if (res.ok) {
            res.json().then(res => {
              console.log(res);
              this.repositories = res;
              
            })
          }       
        })
      
    }
  }
}
</script>


<style scoped>
img {
  width: 100%;
}

p {
  widows: 80%;
  text-align: center;

}
</style>
