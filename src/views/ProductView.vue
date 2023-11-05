<template>
    <div class="home-background"/>
    <div class="product-page-container container ">
        <div class='product-page-details-container row'>
                <div class="card product-page-card col-4">
                    <CloudImage :imageId="product.image.public_id" class="product-page-image card-img"/>
                </div>
                <div class='col details-container'>
                    <div class='row text-start'>
                        <div class='col-8 pe-0 product-page-title-container'>
                            <h2 class='product-page-title'>{{ product.productName }}</h2>
                        </div>
                        <div v-if="product.hasEnded" class='col ps-0 end-date'>
                            <p class="mb-2 ">Auction ended</p>
                        </div>
                        <div v-else class='col end-date'>
                            <p class="mb-2">Auction ending at: {{ product.endingDate }}</p>
                        </div>
                        <hr/>
                        <div class='col prices-container'>
                            <p class="d-flex initial-price-container">
                                Initial Price: 
                                <p class="initial-price">{{ product.initialPrice }}$</p>
                                <p class="initial-price-date">({{ product.initialDate }})</p>
                            </p>
                            <div class="d-flex lates-price-container">
                                <p class="mt-2">Latest Price: </p>
                                <p class="latest-price">{{ product.latestPrice }}$</p>
                            </div>
                        </div>
                        <template v-if="product.hasEnded">
                            <div v-if="isUserAuction(product)" class="col-4 bid-button  un-show-below-600">
                                <BiderDetails class="title-size" :product="product"></BiderDetails>
                            </div>
                            <div v-else class="col-4 bid-button un-show-below-600">
                                <AddBid class="title-size disabled" :product="product"/>
                            </div>
                        </template>
                        <template v-else>
                            <div class="col-4 bid-button un-show-below-600">
                                <AddBid class="title-size" :product="product"/>
                            </div>
                        </template>
                        <hr />
                        <template v-if="product.hasEnded">
                            <div v-if="isUserAuction(product)" class="bid-button un-show-above-600">
                                <BiderDetails class="title-size bid-button-size" :product="product"></BiderDetails>
                            </div>
                            <div v-else class="bid-button un-show-above-600">
                                <AddBid class="title-size bid-button-size disabled" :product="product"/>
                            </div>
                        </template>
                        <template>
                            <div class="bid-button un-show-above-600">
                                <AddBid class="title-size bid-button-size" :product="product"/>
                            </div>
                        </template>
                        <div class=''>
                            <p class='w-100 product-page-description un-show-below-820'>{{ product.description }}</p>
                        </div>
                    </div>
                </div>
                <div class=''>
                    <p class='w-100 product-page-description un-show-above-820'>{{ product.description }}</p>
                </div>
            </div>
            <div class="bids-list-contianer mb-5">
                <ScrollSpy :product="product" addOverflow="add-overflow" :filterKey="product._id"></ScrollSpy>
            </div>
        </div>
</template>

<script>
    import CloudImage from '../components/BaseComponents/CloudImage.vue'; 
    import AddBid from '../components/CostumeComponents/AddBid.vue'
    import BiderDetails from '../components/CostumeComponents/BiderDetails.vue'
    import ScrollSpy from '../components/BaseComponents/ScrollSpy.vue'
    import { isAuctionEnded } from '../middleWare';
    
    export default {
        name: 'ProductView',
        data(){
            return{
             isValidUser: false,
            }
        },
        computed: {
            product(){
                // console.log(this.$store.getters.getProductById(this.$route.params.id).image);
                return this.$store.getters.getProductById(this.$route.params.id)
            },
            user(){
                return this.$store.state.user.data
            },
        },
        methods:{
            //Todo: keep building
            isUserAuction() {
                const body = {
                    user: this.user, 
                    product: this.product
                }
                isAuctionEnded(body, this.updateIsValidUser)
                return this.isValidUser
            },
            updateIsValidUser(value){
                this.isValidUser = value
            }
        },
        components:{
            CloudImage,
            AddBid,
            BiderDetails,
            ScrollSpy
        },
        mounted(){
            this.isUserAuction()
        }
    }
</script>

<style scoped>
.product-page-container{
    padding-top: 75px;
}

@media only screen and (min-width: 600px){
  .un-show-above-600{
    display: none;
  }
}

@media only screen and (max-width: 600px){
}

@media only screen and (max-width: 1000px) {
    .product-page-container{
        max-width: 95%;
    }
    .product-page-card{
        max-height: 270px !important;
        min-height: 270px !important;
        max-width: 280px !important;
        min-width: 280px !important;
    }
    .product-page-image{
        max-height: 270px !important;
    }
    .product-page-title{
        font-size: 1.6rem;
    }
    .product-page-description, .end-date, .initial-price-container, .lates-price-container{
        font-size: 0.9rem !important;
    }
    .initial-price-container{
        margin-bottom: 0;
    }
}
@media only screen and (max-width: 820px) {

    .product-page-card{
        max-height: 190px !important;
        min-height: 190px !important;
        max-width: 200px !important;
        min-width: 200px !important;
    }
    .product-page-image{
        max-height: 190px !important;
    }
    .product-page-title{
        font-size: 1.4rem ;
        padding-right: 0 !important;
    }
    .product-page-description{
        margin-top: 3%;
    }
    .prices-container{
        padding-right: 0;
    }
    .bid-button{
        padding-left: 0;
    }
    .title-size{
        font-size: 0.7rem;
    }
}
@media only screen and (max-width: 635px) {

    .product-page-description{
        font-size: 0.9rem;
    }
    .product-page-title-container{
        padding-left: 0;
    }
    .product-page-title{
        font-size: 1.2rem;
    }
    .end-date, .initial-price-container, .lates-price-container{
        font-size: 0.6rem !important;
    }
    .latest-price{
        font-size: 1.5rem !important;
    }
    .bid-button{
        justify-content: center !important;
        width: 90%;
    }
    .un-show-below{
        display: none !important;
    }
}
@media only screen and (max-width: 500px) {
    .product-page-card{
        max-height: 140px !important;
        min-height: 140px !important;
        max-width: 140px !important;
        min-width: 140px !important;
    }

    .product-page-description{
        font-size: 0.7rem !important;
    }
}

.product-page-details-container{
    margin-top: 5%;
}

.product-page-card{
    display: flex;
    justify-content: center;
    max-height: 370px;
    min-height: 370px;
    max-width: 380px;
    min-width: 380px;
    padding: 2px;
    box-shadow: rgba(4, 17, 29, 0.623) 0px 0px 8px 0px;
}

.product-page-image{
    object-fit: cover;
    max-height: 370px;
    height: 100%;
    width: 100%;
    border-radius: 1.5%;
}

.details-container{
    margin: 0 5%;
}

.end-date{
    padding-right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.latest-price{
    font-size: 2rem;
    font-weight: 600;
    margin-left: 5px;
}

.initial-price{
    margin-left: 5px;
}

.initial-price-date{
    margin-left: 5px;
    color: rgb(116, 116, 116);
}

.bid-button{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-right: 0;
    margin-bottom: 3%;
}

.bids-list-contianer{
    padding-top: 1%;
}

</style>