<template>
    <div className="carousel-flex">
        <div v-if="sortProducts().length !== 0" id="carouselExampleDark" className="carousel carousel-dark slide carousel-container" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="carousel-img-container">
                        <img :src="sortProducts()[0].image.public_id" alt=""  class="carousel-img">
                        <!-- <Image cloudName="diggwedxe" publicId={sortProducts()[0].image.public_id} className="carousel-img" /> -->
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5 className="carousel-title">{{sortProducts()[0].productName}}</h5>
                        <p className="limit-lines">{{sortProducts()[0].description}}</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortProducts()[0].latestPrice - sortProducts()[0].initialPrice) / sortProducts()[0].initialPrice * 100).toFixed(0)}}% Profit!</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="carousel-img-container">
                        <img :src="sortProducts()[1].image.public_id" alt="" class="carousel-img">
                        <!-- <Image cloudName="diggwedxe" publicId={sortProducts()[1].image.public_id} className="carousel-img" /> -->
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5>{{sortProducts()[1].productName}}</h5>
                        <p className="limit-lines">{{sortProducts()[1].description}}.</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortProducts()[1].latestPrice - sortProducts()[1].initialPrice) / sortProducts()[1].initialPrice * 100).toFixed(0)}}% Profit!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-img-container">
                        <img :src="sortProducts()[2].image.public_id" alt=""  class="carousel-img">
                        <!-- <Image cloudName="diggwedxe" publicId={sortProducts()[2].image.public_id} className="carousel-img" /> -->
                    </div>
                    <div className="carousel-caption d-none d-md-block carousel-details-container">
                        <h5>{{sortProducts()[2].productName}}</h5>
                        <p className="limit-lines">{{sortProducts()[2].description}}</p>
                    </div>
                    <div>
                        <p className="carousel-caption profit d-none d-md-block">{{((sortProducts()[2].latestPrice - sortProducts()[2].initialPrice) / sortProducts()[2].initialPrice * 100).toFixed(0)}}% Profit!</p>
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
    export default {
        name: 'Carousel',
        methods:{
            sortProducts(){
                return[
                    {
                    productName: "lksajdklsajdlksajlkd",
                    description: "ksajdlkjsalkdjsalkdjlksajdksadlksajdlksajdlkjsadjsalkjd",
                    initialPrice: 10,
                    image: {
                        public_id: "https://res.cloudinary.com/diggwedxe/image/upload/fht03g3r3cmwgzbkgfcn"},
                    latestPrice: 120,
                },
                    {
                    productName: "lksajdklsajdlksajlkd",
                    description: "ksajdlkjsalkdjsalkdjlksajdksadlksajdlksajdlkjsadjsalkjd",
                    initialPrice: 10,
                    image: {
                        public_id: "https://sivanlotan-jewelry.com/cdn/shop/products/5a7f656c37ec431591e8c5deb64200cc.thumbnail.0000000_1024x.jpg?v=1653035631"},
                    latestPrice: 150,
                },
                    {
                    productName: "lksajdklsajdlksajlkd",
                    description: "ksajdlkjsalkdjsalkdjlksajdksadlksajdlksajdlkjsadjsalkjd",
                    initialPrice: 20,
                    image: {
                        public_id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOobrScQ2fypvdHUpqhQy7dLjUAlYdRRnDJg&usqp=CAU"},
                    latestPrice: 30,
                },
            ]
            }
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