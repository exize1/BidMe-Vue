<template>
    <div class="product-card-container">
        <div class="card text-bg-dark product-card">
            <img v-if="demo" :src="selectedImageUrl ? selectedImageUrl : 'https://userguiding.com/wp-content/uploads/2021/05/product-service-manager.jpg'" alt="Product"  className="product-card-image" />
            <CloudImage v-else :imageId="product.image.public_id" class="product-card-image"/>
            <div class="card-img-overlay product-details-container ">
                <div>
                    <h5 class="product-card-title card-title">{{product.productName}}</h5>
                </div>
                <div>
                    <p class="card-text limited-lines">{{product.description}}</p>
                </div>
                <div class="row product-details">
                    <div class="product-initial-price col ps-0 pe-1 ">
                        Initial price: {{product.initialPrice}}$
                    </div>
                    <div class="product-initial-price col ps-0 pe-1 limited-text">
                        Current price: {{product.latestPrice}}$
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CloudImage from './CloudImage.vue'; 
    export default {
        name: 'Card',
        components: {
            CloudImage
        },
        props:{
            product:{
                type: Object,
                required: true
            },
            demo: {
                type: Boolean,   
                default: false
            },
            selectedImageUrl: {
                type: String,   
            }
        }
    }
</script>

<style scoped>
.product-card-container{
    max-width: 230px;
    min-width: 230px;
    margin-bottom: 40px;
    border-radius: 10%;
}

.product-card{
    box-shadow: rgba(4, 17, 29, 0.623) 0px 0px 8px 0px;
}

.product-card-image{
    object-fit: cover;
    max-height: 280px !important;
    min-height: 280px !important;
}
@media only screen and (max-width: 1200px){
    .product-card-container{
        max-width: 170px;
        min-width: 170px;
        margin-bottom: 40px;
        border-radius: 10%;
    }

    .product-card-image{
        max-height: 220px !important;
        min-height: 220px !important;
    }

    .product-card:hover{
        font-size: 0.55rem !important;
        transition: 0.2s;
    }
    .limited-lines {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 9 !important;
        -webkit-box-orient: vertical;
      }
    .product-card-title.card-title{
        font-size: 1rem !important;
    }

    .product-details-container:hover .product-initial-price{
        font-size: 0.5rem;
    }
}
@media only screen and (max-width: 800px){
    .product-card-container{
        max-width: 140px;
        min-width: 140px;
        margin-bottom: 40px;
        border-radius: 10%;
    }

    .product-card-image{
        max-height: 180px !important;
        min-height: 180px !important;
    }

    .product-card-title.card-title{
        font-size: 0.7rem !important;
    }
    .product-card:hover{
        font-size: 0.45rem !important;
        transition: 0.2s;
    }
    .limited-lines {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 9 !important;
        -webkit-box-orient: vertical;
      }

    .product-details-container:hover .product-initial-price{
        font-size: 0.4rem;
    }
}
.product-card:hover .product-card-image {
    opacity: 0.5;
}

.product-card{
    font-size: 0;
}

.limited-lines {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 11;
    -webkit-box-orient: vertical;
  }
  
.limited-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
  }

.product-card:hover{
    font-size: 0.65rem;
    transition: 0.2s;
}


.product-details-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition-timing-function: ease-in-out;
    transition-duration: 0.15s;
}

.product_details{
    transition:  400ms cubic-bezier(0.23, 1, 0.32, 1);
    transition-timing-function: ease-in-out;
}


.product-details-container:hover .product-details::after{
    content: '';
    display: block;
    background-color: rgba(255, 255, 255, 0.9);
    height: 1.5px;
    width: 98%;
}

.product-details-container:hover  .product-details::before{
    content: '';
    display: block;
    background-color: rgba(255, 255, 255, 0.9);
    height: 2px;
    width: 98%;
}

.product-card-title.card-title{
    font-size: 1.2rem;
}
</style>