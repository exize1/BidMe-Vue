<template>
    <div>
        <Alert :alertType="alertType" :isHidden="showAlert" :setIsHidden="hideAlert" costumeClass="position">
            {{ alertMessage }}
        </Alert>
        <div class="home-background"/>
        <div class="login-page-container">
                <div class="row">
                <div class="background-container un-show-below-900">
                    <div class="teaser-container"/>
                </div>
                <div class="right-side-container">
                    <div class="login-container">
                        <div class="form-contianer">
                            <h1 class="mt-4 pt-2">Sign in</h1>
                            <p>use your auction account</p>
                            <form @submit="handleSubmit" noValidate>
                                <div class="form-floating mb-3">
                                    <input name="email" v-model="email" type="text" class="form-control" id="floatingInput" placeholder="username, email, or mobile"  />
                                    <label htmlFor="floatingInput">Username, email, or mobile</label>
                                    <p v-show="errors.email" class="error-message">{{errors.email}}</p>
                                </div>
                                <div class="form-floating password-input-contianer">
                                    <input name="password" :type="passwordType"  v-model="password" class="form-control password-input" id="floatingInput" placeholder="Password"/>
                                    <label htmlFor="floatingInput">Password</label>
                                    <button type="button" class="btn btn-outline-secondary eye-button" @click="ShowUnShowPassword">
                                        <FontAwesomeIcon v-if="passwordType === 'password'" icon="fa-eye" /> 
                                        <FontAwesomeIcon v-else icon="fa-eye-slash" />
                                    </button>
                                </div>
                                <button type="submit" :disabled="$store.state.user.isFetching" class="btn btn-primary my-3">LOGIN</button>
                                <div class="forgot-password-contianer">
                                    <div class="stay-signed-container">
                                        <input class="form-check-input mt-0" type="checkbox" value="" />
                                        <p class="mb-0 ms-2">Stay signed in</p>
                                    </div>
                                    <p class="mb-0">Forgot your password?</p>
                                </div>
                                <RouterLink to="/signup">
                                    <button type="button" class="btn btn-outline-primary mt-3">Create an account</button>
                                </RouterLink>
                                <p class="mb-2 mt-2">Or, continue with</p>
                                <button type="button" class="btn btn-outline-secondary mb-5">Google</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { login } from '../middleWare'
    import Alert from '../components/BaseComponents/Alert.vue'

    export default {
        name: 'Login',
        data() {
            return{
                email: "",
                password: "",
                errors:{
                    email: false,
                    password: false,
                },
                passwordType: "password",                
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        methods:{
            ShowUnShowPassword(){
                if(this.passwordType === "password") this.passwordType = "text"
                else this.passwordType = "password"
            },
            navigateHome(){
                this.$router.replace('/')
            },
            handleSubmit(event){
                event.preventDefault()
                
                const values = {
                    email: this.email,
                    password: this.password,
                }
                login(values, this.navigateHome, this.setAlertData)
            },
            setAlertData(data){
                if(data == null) return
                this.alertType = data.error ? 'danger' : 'success' 
                this.alertMessage = data.message 
                this.showAlert = true
            },
            hideAlert(){
                this.showAlert = false
            },
        },
        components:{
    FontAwesomeIcon,
    Alert
}
    }
</script>

<style scoped>
.login-page-container{
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding-top: 74px;
    overflow-y: scroll;
}

.invalid-login-alert{
    position: fixed;
    z-index: 100;
    top: 15%;
    width: 35%;
    right: 35%;
    opacity: 85%;
}

.background-container{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
}

.teaser-container{
    background-image: url(https://c8.alamy.com/comp/2D7GAPB/online-sale-shopping-vector-banner-design-online-shopping-text-with-phone-cart-and-paper-bag-elements-in-smartphone-app-store-for-mobile-business-2D7GAPB.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    border-radius: 10px;
    width: 90%;
    height: 70%;
}

.right-side-container{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 900px){
    .right-side-container{
        width: 100%;
    }
}

.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    border-radius: 10px;
    background-color: white;
}

.form-contianer{
    width: 85%;
}

.password-input-contianer{
    display: flex;
}

.password-input{
    border-right: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
}

.eye-button{
    border-color: rgb(216, 215, 215);
    border-left: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
}

.eye-button:hover{
    border-color: rgb(216, 215, 215) !important;
    color: black !important;
    background-color: white !important;
}

.forgot-password-contianer{
    display: flex;
    justify-content: space-between;
    color: rgb(0, 140, 255);
}

.stay-signed-container{
    display: flex;
    align-items: center;
}
</style>