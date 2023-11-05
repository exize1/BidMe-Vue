<script >
import { RouterView } from 'vue-router'
import Navbar from './components/BaseComponents/Navbar.vue'
import { getBids, getProducts } from './middleWare'

export default{
  name:'App',
  components:{
    Navbar
  },
  created(){
    getProducts()
  },
  mounted() {
    getBids()
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      this.$store.dispatch("setUser", JSON.parse(savedUser));
    }
  },
}
</script>

<template>
    <Navbar />
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

.add-overflow{
    overflow-y: scroll;
    overflow-x: hidden;
}

.app-container{
 padding-top: 65px;
}

.remove-decoration{
  text-decoration: none;
}
.remove-borders{
    border: 0;
    background-color: rgba(255, 255, 255, 0);
}

.popper{
    position: absolute;
    height: 0px;
    font-size: 0;
}

.remove-borders:hover .popper{
    color: white;
    display: block;
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.911);
    border-radius: 8px;
    height: 30px;
    width: max-content;
    padding: 3px 10px 0 10px;
    right: -150%;
    font-size: 1rem;
}

.error-message{
    color: rgb(216, 86, 86);
}

@media only screen and (min-width: 600px){
  .un-show-above-600{
    display: none !important;
  }
}

@media only screen and (max-width: 600px){
  .un-show-below-600{
    display: none !important;
  }
}

@media only screen and (min-width: 900px){
  .un-show-above-900{
    display: none !important;
  }
}

@media only screen and (max-width: 900px){
  .un-show-below-900{
    display: none !important;
  }
}

@media only screen and (min-width: 820px){
  .un-show-above-820{
    display: none !important;
  }
}

@media only screen and (max-width: 820px){
  .un-show-below-820{
    display: none !important;
  }
}
</style>
