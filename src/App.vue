<script >
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default{
  name:'App',
  components:{
    Navbar
  }
}
</script>

<template>
  <Navbar/>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style >
*{
    font-family: 'Poppins', sans-serif;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    text-align: center;

}

.app-container{
 padding-top: 72px;
}
</style>
