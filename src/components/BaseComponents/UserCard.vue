<template>
    <div class="card user-card-cotnainer">
        <RouterLink :to="`auctions/${product._id}`" class="remove-decoration">
            <CloudImage :imageId="product.image.public_id" class="card-img-top user-card-image"/>
            <div class="card-body user-card-body ">
                <h5 class="user-card-title">{{product.productName}}</h5>
                <div class='user-initial-price'>
                    Initial price: {{product.initialPrice}}$
                </div>
                <div class='price'>
                    Current price: <b>{{product.latestPrice}}$</b>
                </div>
            </div>
        </RouterLink>
        <div class='card-body user-card-body lower-card-section mt-4'>
            <p class='mb-1 bid-number'><b>Bids:</b> {{filteredBids.length}}</p>
            <slot>
                <div class="btn-group dropup">
                    <button type="button" class="remove-borders" data-bs-toggle="dropdown"  aria-expanded="false"  data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                        <div class='more-options-icon-container'>
                            <FontAwesomeIcon icon="fa-ellipsis" />
                        </div>
                        <div class='popper'>
                            <p>More options</p>
                        </div>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" @click="handleCopy" href="#CopyLink">Copy link</a></li>
                        <li><a class="dropdown-item" @click="handleEndAuction" href="#EndAuction">End auction</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" @click="() => handleDelete(product._id)" href="#Delist">Delist</a></li>
                    </ul> 
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    import CloudImage from './CloudImage.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { RouterLink } from 'vue-router'
    import { endAuction, deleteProduct } from '../../middleWare'
    export default {
        name: 'UserCard',
        computed: {
            bids(){
                return this.$store.state.bids
            },
            filteredBids(){
                return(
                    this.bids.filter((val) => {
                        if(this.product._id === ""){
                            return val;
                        }else if(val.productId.includes(this.product._id)){
                            return val;
                        }else return null
                    })
                )
            }
        },
        methods:{
            async handleCopy (){
                const url = `${window.location.origin}/auctions/${this.product._id}`
                await navigator.clipboard.writeText(url)
            },
            handleEndAuction(){
                endAuction(this.product._id)
            },
            handleDelete(){
                deleteProduct(this.product._id)
            }
        },
        props:{
            product: {
                type: Object,
                required: true
            }
        },
        components:{
            CloudImage,
            FontAwesomeIcon
        }
    }
</script>

<style scoped>
.user-card-cotnainer{
    width: 18rem;
    height: fit-content;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}

.user-card-image{
    object-fit: cover;
    max-height: 175px;
    max-height: 175px;
}

.user-card-body{
    text-align: start;
    color: black;
}


.user-initial-price{
    font-size: 0.8rem;
}

.lower-card-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.more-options-icon-container{
    font-size: 1.6rem;
    color: rgba(0, 0, 0, 0.603);
    margin-right: 4%;
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

@media only screen and (max-width: 773px) {
    .user-card-cotnainer{
        margin-top: 10%;
        width: 10rem;
        height: fit-content;
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    }
    
    .user-card-image{
        object-fit: cover;
        max-height: 95px;
        max-height: 95px;
    }
    
    .user-card-body{
        height: 42px !important;
        padding-top: 4%;
        padding-left: 5%;
    }

    .user-card-title{
        font-size: 0.8rem;
        margin-top: 1%;
    }

    .user-initial-price{
        font-size: 0.65rem;
    }
    
    .price{
        padding-top: 0.5%;
        font-size: 0.7rem;
    }

    .lower-card-section{
        padding-bottom: 0;
        padding-top: 8%;
    }

    .bid-number{
        font-size: 0.7rem;
    }

    .more-options-icon-container{
        font-size: 1.2rem;
    }
}


</style>