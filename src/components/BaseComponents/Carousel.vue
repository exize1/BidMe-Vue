<template>
    <div className="carousel-flex">
        <div v-if="sortedProducts.length !== 0" id="carouselExampleDark" className="carousel carousel-dark slide carousel-container" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="carousel-img-container">
                        <CloudImage :imageId="sortedProducts[0].image.public_id" className="carousel-img" />
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5 className="carousel-title">{{sortedProducts[0].productName}}</h5>
                        <p className="limit-lines">{{sortedProducts[0].description}}</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortedProducts[0].latestPrice - sortedProducts[0].initialPrice) / sortedProducts[0].initialPrice * 100).toFixed(0)}}% Profit!</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="carousel-img-container">
                        <CloudImage :imageId="sortedProducts[1].image.public_id" className="carousel-img" />
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5>{{sortedProducts[1].productName}}</h5>
                        <p className="limit-lines">{{sortedProducts[1].description}}.</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortedProducts[1].latestPrice - sortedProducts[1].initialPrice) / sortedProducts[1].initialPrice * 100).toFixed(0)}}% Profit!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-container">
                        <CloudImage :imageId="sortedProducts[2].image.public_id" className="carousel-img" />
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5>{{sortedProducts[2].productName}}</h5>
                        <p className="limit-lines">{{sortedProducts[2].description}}</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortedProducts[2].latestPrice - sortedProducts[2].initialPrice) / sortedProducts[2].initialPrice * 100).toFixed(0)}}% Profit!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
    import CloudImage from './CloudImage.vue';
    export default {
        name: 'Carousel',
        computed:{
            products(){
                return this.$store.state.products
            },
            sortedProducts(){
                const copy = [...this.products]
                const sortedProducts = copy.sort((a, b) => Number(b.latestPrice) / Number(b.initialPrice) - Number(a.latestPrice) / Number(a.initialPrice))

                return sortedProducts
            },
        },
        components:{
            CloudImage
        }
    }
</script>

<style  scoped>
.carousel-flex{
    display: flex;
    justify-content: center;
}

.carousel-container{
    width: 75%;
    box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.49);
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    margin-top: 2%;
    margin-bottom: 2.5%;
}

.limit-lines {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

@media only screen and (max-width: 1060px){
    .carousel-container{
        width: 90%;
    }

    .carousel-details-container{
        left: 30vw !important;
    }
    
}
@media only screen and (min-width: 800px){
        
    .carousel-img{
        max-width: 300px !important;
        min-width: 300px !important;
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
        max-height: 300px !important;
        min-height: 300px !important;
        object-fit: cover !important;
    }
    
    .carousel-img-container{
        height: 300px;
        width: 300px;
        clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    }
}

@media only screen and (max-width: 800px){
    .carousel-container{
        width: 65%;
        
    }
    .carousel-details-container{
        font-size: 1.1rem;
        color: rgba(240, 240, 240, 0.979) !important; 
        left: 10% !important;
    }
    .profit{
        color: white !important;
        font-weight: 600;
        margin-left: 0 !important;
    }
}


.carousel-img{
    border-radius: 15px;
    max-width: 100% !important;
    min-width: 100% !important;
    max-height: 300px !important;
    min-height: 300px !important;
    object-fit: cover !important;
}

.carousel-details-container{
    bottom: 0;
    top: 0;
    left: 25vw;
}

.carousel-title{
}

.profit{
    font-size: 2rem;
    margin-left: 20%;
    margin-bottom: 3%;
}


</style>