<template>
    <nav class="costume-navbar">
        <div class="navbar-container ">
            <div class="left-side-container">
                <div class="logo-container">
                    <h2 class="logo">BidMe</h2>
                </div>
                <ul class="navbar-buttons" >
                    <li class="link-container" v-for="(route, index) in routes" :key="index">
                        <RouterLink class="link" :to="getRoute(route)">{{ route }}</RouterLink>
                    </li>
                </ul>
            </div>

            <SearchBar/>

            <div class="links-container">
                <div class="burger" @click="open = !open">
                    <div class="line1" :class="{'toggle': open}"></div>
                    <div class="line2" :class="{'toggle': open}"></div>
                    <div class="line3" :class="{'toggle': open}"></div>
                </div>
                <div>
                    <template v-if="$store.state.user.data.loggedIn" >
                        <div class="buttons-container">
                            <button v-if="$store.state.user.data.loggedIn" @click="logout" class="btn btn-danger me-3">Logout</button>
                            <AddProductModal class="me-2"/>
                            <CloudImage v-if="$store.state.user.data.loggedIn" :imageId="$store.state.user.data.avatar.public_id" class="avatar"/>
                        </div>
                    </template>
                    <template v-else>
                        <div class="login-signup un-show-below-600 buttons-container">
                            <RouterLink to="/login" @click="open = false">
                                <button type="button" class="btn btn-primary me-3  btn-sm">Login</button>
                            </RouterLink>
                            <RouterLink to="/signup" @click="open = false">
                                <button type="button" class="btn btn-secondary me-3 btn-sm">Sign up</button>
                            </RouterLink>
                        </div>
                        <div class="login-signup un-show-above-600">
                            <RouterLink to="/login" @click="open = false">
                                <button type="button" class="btn btn-primary me-3  btn-sm">Login</button>
                            </RouterLink>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <ul v-if="open" class="navbar-buttons-open" >
            <li v-for="(route, index) in routes" :key="index" class="link-container">
                <RouterLink :to="getRoute(route)" class="link" @click="open = false">{{ route }}</RouterLink>
                <!-- <hr v-if="index !== routes.length - 1 "/> -->
            </li>
            <li class="nav-item logout-add-product-container">
                <template v-if="$store.state.user.data.loggedIn">
                    <FontAwesomeIcon icon="fa-right-from-bracket" class="logout-btn" @click="logout"/>
                    <div class="add-product-container">
                        <AddProductModal class="add-product-btn-size"/>
                    </div>
                </template>
                <template v-else>
                    <RouterLink to="/login" @click="open = false">
                        <button type="button" class="btn btn-primary ms-3 mb-2 btn-sm" >Login</button>
                    </RouterLink>
                    <RouterLink to="/signup" @click="open = false">
                        <button type="button" class="btn btn-secondary me-3 mb-2 btn-sm">Sign up</button>
                    </RouterLink>
                </template>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { RouterLink } from "vue-router"
    import SearchBar from "./SearchBar.vue"
    import AddProductModal from "../CostumeComponents//AddProductModal.vue"
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import CloudImage from "./CloudImage.vue"
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
                return route === "Home" ? "/" : `/${route.toLowerCase()}`
            },
            logout(){
                this.$store.commit("updateUserData", { loggedIn: false })
                this.open = false
                this.$router.replace('/')
            }
        },
        components:{
    SearchBar,
    AddProductModal,
    CloudImage,
    FontAwesomeIcon
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
    padding: 7px 1.5%
}

.logo-container{
    height: max-content;
}

.logo{
    margin: 0 20px 0 0;
}

.left-side-container{
    display: flex;
    align-items: center;
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
    align-items: center;
    display: flex;
    
}

.add-product-container{
    /* margin-right: 3%; */
}

.danger-btn{
    background-color: red;
}

.link{
    margin: 0;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.55);
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

.logout-add-product-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logout-btn{
    margin-left: 2% !important;
    font-size: 1.3rem;
    cursor: pointer;
}

.add-product-btn-size{
    font-size: 0.8rem;
    padding: 5px 7px;
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
    min-width: 55px;
}
</style>