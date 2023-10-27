<script>
import Card from '../components/Card.vue'
import Carousel from '../components/Carousel.vue'

export default{
  components:{
    Card,
    Carousel
  }
}
</script>

<template>
  <div class="home-background"></div>
  <div>
      <h1 class="pt-5 mt-3 mb-4 fw-semibold">Welcome to BidMe</h1>
      <Carousel/>
      <!-- <InfoSection/>
      <div class="mt-5 pt-5">
          <NewMostPopular/>
      </div> -->
  </div>
</template>

<style>
.home-background{
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: hsla(209, 63%, 92%, 1);

    background: linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -moz-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DCEAF7", endColorstr="#EEF6FC", GradientType=1 );
}
</style>


