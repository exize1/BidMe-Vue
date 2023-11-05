<template>
 <div class="acution-container ">
    <div class='filter-button-container'>
        <FilterByCategory @set-category="setCategory"/>
    </div>
    <div>
      <template v-for="(category, categoryIndex) in filteredCategories" :key="categoryIndex">
          <div class='auction-background-container'>
              <div class='auction-background'>
                  <img class='background' :src="category.background" :alt="category.category" />
              </div>
          </div>
          <div class='category-container'>
              <div :class='`category ${filteredCategories.length === 1 && "one-category-container"}`'>
                  <div class='container'>
                      <h2 class='row' >{{category.category}}</h2>
                      <div class="cards-container" :class="filteredCategories.length > 1 ? 'flex-nowrap-cards' : 'flex-wrap-cards'">
                            <div v-if="filtered(category.category).length === 0" class='my-3'>
                                <h3 > No products on this category. want to be the first one?</h3>
                                <AddProductModal />
                            </div>
                            <template v-else> 
                                    <div v-for="(product, index) in filtered(category.category)" :key="product.id">
                                        <div v-if="filteredCategories.length > 1">
                                            <div v-if="index > filtered(category.category).length - 5" class='link-container'>
                                                <RouterLink :to="`auctions/${product._id}`">    
                                                    <Card :product="product"/>
                                                </RouterLink>
                                            </div>
                                            <div v-else-if="index === filtered(category.category).length - 5">
                                                <button class='continue-products'  @click="() => {setCategory(categories[categoryIndex].category)}">
                                                    <FontAwesomeIcon icon="fa-arrow-right" />
                                                </button>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div class='link-container'>
                                                <RouterLink :to="`auctions/${product._id}`">
                                                    <Card :product="product"/>
                                                </RouterLink>
                                            </div>
                                        </div>
                                    </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
      </div>
  </div>
</template>

<script>
  import { RouterLink } from "vue-router";
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import Card from "../components/BaseComponents/Card.vue"
  import FilterByCategory from "../components/BaseComponents/FilterByCategory.vue"
  import AddProductModal from "../components/CostumeComponents/AddProductModal.vue"
  
  export default {
    name: 'AuctionsView',
    data() {
      return {
        categories: [
          { category: "collectibles", background: "https://images.squarespace-cdn.com/content/v1/5b639477da02bc37d54bda10/1559424311155-BPI63IRYAZRWYUUCHRMZ/IMG_5752.JPG?format=1000w" },
          { category: "electronics", background: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Old_Electronics_hero_1.max-1000x1000.jpg" },
          { category: "fashion", background: "https://static01.nyt.com/images/2022/09/13/business/12green-fashion-print/merlin_212957199_9c5f9b9e-c492-481c-ad44-29a25d0b7496-jumbo.jpg?quality=75&auto=webp" },
          { category: "home", background: "https://foyr.com/learn/wp-content/uploads/2019/03/best-home-garden-ideas.png" },
          { category: "accessories", background: "https://cdn.shopify.com/s/files/1/0281/3837/3173/files/dressbarn_Rich_Media_Blog_2_Types_of_Accessories_Header_600x600.jpg?v=1629829475" },
          { category: "musical", background: "https://cdn1.epicgames.com/ue/item/MusicalInstruments_Screenshot_01-1920x1080-4091939f118fb786ae3fb1fab71c76e8.png?resize=1&w=1920" },
          { category: "sporting", background: "https://i.pinimg.com/originals/3c/c4/8d/3cc48d64caa3cc00ad176a2af2506bea.jpg" },
          { category: "toys", background: "https://i.ytimg.com/vi/wiHZ-VEm3o0/maxresdefault.jpg" }
        ],
        filteredCategories: [],
      };
    },
    computed:{
        products(){
            return this.$store.state.products 
        }
    },
    methods:{
      filtered(category){
          return (
              this.products.filter((val) => {
                  if (category === "") {
                      return val;
                  } else if (val.category.includes(category)) {
                      return val;
                  }else return null
              })
          )
        },
        setCategory(category){
            if (category === null) return
            if(category === "") {
                this.filteredCategories = this.categories
                return
            }
            this.filteredCategories = this.categories.filter((categoryObject) => categoryObject.category === category)
        }
    },
    components:{
    Card,
    FilterByCategory,
    AddProductModal,
    RouterLink,
    FontAwesomeIcon
},
    mounted(){
        this.filteredCategories = this.categories
    },

  }
 

</script>

<style>
.acution-container{
    padding-top: 10px;
}

.filter-button-container{
    background-color: white;
    padding-bottom: 1%;
}

.auction-background-container{
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100%;
}

.background{
    object-fit: cover;
    width: 100%;
    filter: blur(2px);
    max-height: 200px;
    min-height: 200px;
}

.category-container{
    padding-top: 13%;
}

.category{
    max-height: 450px;
    min-height: 450px;
    height: 100%;
    padding-top: 2%;
    background: hsla(209, 63%, 92%, 1);

    background: linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -moz-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DCEAF7", endColorstr="#EEF6FC", GradientType=1 );
}

.one-category-container{
    height: 700px !important;
    min-height: fit-content !important;
    max-height: none !important;
}


.cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
    max-height: 280px ;
    min-height: 280px ;
    max-width: 100% ;
    min-width: 100% ;
    margin-top: 4%;
}


.flex-wrap-cards{
    flex-wrap: wrap;
}

.flex-nowrap-cards{
    flex-wrap: nowrap;
}

.link-container{
    padding-right: 2%;
    padding-left: 2%;
}

.continue-products{
    background-color: rgba(238, 238, 238, 0.596);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px;
    height: 280px;
    font-size: 1.8rem;
    display: flex;
    align-self: flex-end;
    align-items: center;
    margin-bottom: 1.5%;
    color: rgba(0, 0, 0, 0.733);
    transition: ease-in-out 0.2s;
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 15px;
}

.continue-products:hover{
    color: rgb(0, 0, 0);
    background-color: rgba(238, 238, 238, 0.623);
    box-shadow: rgb(0 0 0 / 10%) 0px 6px 20px;
}


@media only screen and (max-width: 800px){
    .cards-container{
        max-height: 240px ;
        min-height: 240px ;
    }

    .category{
        max-height: 360px;
        min-height: 360px;
        height: 100%;
        padding-top: 2%;
        background-color: white;
    }
    
}
@media only screen and (max-width: 640px){

    .cards-container{
        flex-wrap: wrap;
        max-height: 100% ;
        min-height: 100% ;
    }

    .category{
        max-height: 100%;
        min-height: 100%;
        height: 100%;
        padding-top: 2%;
        background-color: white;
    }
    
}
</style>
