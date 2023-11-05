<template>
    <div class="illustration-background un-show-below-600"/>
    <div class='illustration-container un-show-below-600'>
        <div class='ms-3 row'>
            <div class="me-2 mt-3 card illustration-product-page-card col-4">
                <img :src="selectedImageUrl ? selectedImageUrl : 'https://userguiding.com/wp-content/uploads/2021/05/product-service-manager.jpg'" alt="Product" class="illustration-product-card-image card-img"/>
            </div>
            <div class='col-8 illustration-details-container'>
                <div class='row text-start'>
                    <div class='col-6 illustration-title-container'>
                        <h2 class='mb-1 mt-2 illustration-title'>{{product.productName ? product.productName : "ProductName"}}</h2>
                    </div>
                    <div class='col end-date '>
                        <p class="my-1 illustration-end-date">{{ product.endingDate }}</p>
                    </div>
                    <hr/>
                    <div class='col-8'>
                        <p class="illustration-initial-price mb-0 d-flex">
                            Initial Price: 
                            <b class='ms-1'>{{product.initialPrice ? product.initialPrice : "####"}}$</b>
                            <p class="initial-price-date">{{ `(${product.initialDate})` }}</p>
                        </p>
                        <div class="illustration-initial-price d-flex">
                            <p class="me-1 mb-2">Latest Price: </p>
                            <b class="illustration-latest-price">{{product.initialPrice !== 0 ? product.initialPrice : "####"}}$</b>
                        </div>
                    </div>
                    <div class="col-4 bid-button">
                        
                    </div>
                    <hr class='mb-2'/>
                    <div class='illustration-description'>
                        <p class='w-100 '>{{product.description !== "" ? product.description : "Some Descrption about the product..."}}</p>
                        <!-- <p class='w-100 '>{{product.description.description : "Some Descrption about the product..."}}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductViewIllustartion',
        props:{
            product:{
                type: Object,
                required: true
            },
            selectedImageUrl: {
                type: String,   
            },
            duaration: {
                type: Number,   
            }
        },
    }
</script>

<style scoped>
.illustration-background{
    position: fixed;
    z-index: -1;
    width: 300px;
    height: 208px;
}

.illustration-container{
    position: absolute;
    bottom: 2%;
    right: 1%;
    /* background-color: white; */
    width: 300px;
    height: 208px;
    border-radius: 13px;
    box-shadow: rgba(4, 17, 29, 0.623) 0px 0px 8px 0px;
    background: hsla(209, 63%, 92%, 1);

    background: linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -moz-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    background: -webkit-linear-gradient(90deg, hsla(209, 63%, 92%, 1) 0%, hsla(206, 70%, 96%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);

    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DCEAF7", endColorstr="#EEF6FC", GradientType=1 );
}

.illustration-product-page-card{
    max-height: 70px;
    min-height: 70px;
    max-width: 70px;
    min-width: 70px;
    padding: 0.1px;
    box-shadow: rgba(4, 17, 29, 0.623) 0px 0px 8px 0px;
}

.illustration-product-card-image{
    object-fit: cover;
    max-height: 70px;
    height: 70px;
    border-radius: 6px;
}

.illustration-title{
    font-size: 0.5rem;
}

.illustration-end-date{
    font-size: 0.4rem;
}

.illustration-initial-price{
    font-size: 0.4rem;
}

.illustration-latest-price{
    font-size: 0.6rem;
}

.illustration-description{
    font-size: 0.35rem;
}
</style>