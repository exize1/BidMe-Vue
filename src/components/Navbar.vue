<template>
    <nav class="costume-navbar">
        <div class="navbar-container">
            <div class="logo-container">
                <h1 class="logo">BidMe</h1>
            </div>
            <ul class="navbar-buttons" >
                <li class="link-container"  v-for="(route, index) in routes" :key="index">
                    <RouterLink class="link" :to="getRoute(route)">{{ route }}</RouterLink>
                </li>
            </ul>

            <SearchBar/>

            <div class="links-container">
                <div class="burger" @click="open = !open">
                    <div class="line1" :class="{'toggle': open}"></div>
                    <div class="line2" :class="{'toggle': open}"></div>
                    <div class="line3" :class="{'toggle': open}"></div>
                </div>
                <div class="buttons-container">
                    <Button @click="logout" class="logout-btn">Logout</Button>
                    <Button>+ Add Product</Button>
                    <img class="avatar" src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt="">
                    <!-- <Image cloudName="diggwedxe" publicId={user.avatar.public_id} className="avatar"/> -->
                </div>
            </div>
        </div>
        <ul class="navbar-buttons-open" >
            <li v-if="open" v-for="(route, index) in routes" :key="index" class="link-container">
                <RouterLink :to="getRoute(route)" class="link" @click="open = false">{{ route }}</RouterLink>
                <hr v-if="index !== routes.length - 1 "/>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { RouterLink } from "vue-router"
    import SearchBar from "./SearchBar.vue"
    import Button from "./Button.vue"
    export default {
        name: 'Navbar',
        data(){
            return{
                open: false,
                routes: ['Home', 'Auctions', 'User'],
            }
        },
        methods:{
            getRoute(route){
                return route == "Home" ? "/" : route.toLowerCase()
            },
            logout(){
                console.log("logout");
            }
        },
        components:{
            SearchBar,
            Button
        }
    }
</script>

<style scoped>
.costume-navbar{
    position: fixed;
    z-index: 100;
    width: 100%;
    background-color: rgb(248, 249, 250);
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}

.navbar-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 1.5%
}

.logo-container{
    height: max-content;
}

.logo{
    margin: 0 20px 0 0;
}

.links-container{
}

.burger {
    display: none;
  }

.open-menu-container{
    display: none;
}

.link-container{
    padding: 0 10px;
}

.navbar-buttons{
    width: auto;
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

.buttons-container{
    width: auto;
    display: flex;
}

.danger-btn{
    background-color: red;
}

.link{
    margin: 0;
    text-decoration: none;
    color: black;
}

.navbar-buttons-open{
    display: none;
}

.line1, .line2, .line3 {
    width: 25px;
    height: 3px;
    background-color: #575656;
    margin: 5px;
    transition: all 0.3s ease;
}

.toggle.line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle.line2 {
    opacity: 0;
}

.toggle.line3 {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media only screen and (max-width: 1100px){
    .buttons-container{
        display: none;
    }
    .burger {
        display: block;
        cursor: pointer;
      }
    .open-menu-container, .navbar-buttons-open{
        display: block;
        margin: 0;
        padding: 0;
    }

    .link-container{
        padding: 10px 10px;
        list-style: none;
    }
}
.avatar{
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    object-fit: cover;
    max-height: 55px;
    min-height: 55px;
    max-width: 55px;
}
</style>