<template>
    <div>
        <div class="signup-page-container">
            <div class="signup-background"></div>
            <div class="add-another-container">
                <Alert
                    :alertMessage="alertMessage"
                    :alertType="alertType"
                    :showAlert="showAlert"
                    :setIsHidden="hideAlert">

                </Alert>
            <!-- {alert && (
                <div class="alert alert-danger invalid-login-alert" role="alert" hidden={!alert}>
                    {message}
                </div>
            )} -->
                <div class="sign-up-container">
                    <div class="sign-up">
                        <h1 class="mb-4 pb-2 mt-5 color-white">Sign up</h1>
                
                        <form @submit="onSubmit" noValidate>
                            <div class="row">
                                <div class="col">
                                    <TextInput placeholder="First Name" label="First Name" 
                                    :value="newUser.firstName" 
                                    @on-change="updateFirstName" 
                                    @on-blur="blurFirstName" 
                                    :isValid="validations.firstName.isValid" 
                                    :validationMessage="validations.firstName.message"
                                    >

                                    </TextInput>
                                </div>
                                <div class="col">
                                    <TextInput placeholder="Last Name" label="Last Name" 
                                        :value="newUser.lastName" 
                                        @on-change="updateLastName" 
                                        @on-blur="blurLastName" 
                                        :isValid="validations.lastName.isValid" 
                                        :validationMessage="validations.lastName.message"
                                        >

                                    </TextInput>
                                </div>
                            </div>
                    
                            <div class="un-show-above-600">
                                <div class="row">
                                    <div class="col">
                                        <TextInput placeholder="Email Address" label="Email Address" 
                                        :value="newUser.email" 
                                        @on-change="updateEmail" 
                                        @on-blur="blurEmail" 
                                        :isValid="validations.email.isValid" 
                                        :validationMessage="validations.email.message"
                                        >

                                        </TextInput>
                                    </div>
                                    <p class=" align-center mb-0 color-white">OR</p>
                                    <div class="col">
                                        <TextInput placeholder="Phone Number" inputType="number" label="Phone Number" 
                                            :value="newUser.phone" 
                                            @on-change="updatePhone" 
                                            @on-blur="blurPhone" 
                                            :isValid="validations.phone.isValid" 
                                            :validationMessage="validations.phone.message"
                                            :removeMarginTop="true"
                                            >

                                        </TextInput>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row un-show-below-600">
                                <div class="col-6">
                                    <TextInput placeholder="Email Address" inputType="email" label="Email Address" 
                                    :value="newUser.email" 
                                    @on-change="updateEmail" 
                                    @on-blur="blurEmail" 
                                    :isValid="validations.email.isValid" 
                                    :validationMessage="validations.email.message"
                                    >

                                    </TextInput>
                                </div>
                                <p class="col-1 align-center color-white">OR</p>
                                <div class="col">
                                    <TextInput placeholder="Phone Number" inputType="number" label="Phone Number" 
                                        :value="newUser.phone" 
                                        @on-change="updatePhone" 
                                        @on-blur="blurPhone" 
                                        :isValid="validations.phone.isValid" 
                                        :validationMessage="validations.phone.message"
                                        >

                                    </TextInput>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <TextInput placeholder="Password" label="Password" 
                                        :value="newUser.password" 
                                        @on-change="updatePassword" 
                                        @on-blur="blurPassword" 
                                        :isValid="validations.password.isValid" 
                                        :validationMessage="validations.password.message"
                                        >
                                    </TextInput>
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col">
                                    <TextInput placeholder="Confirm Password" label="Confirm Password" 
                                        :value="newUser.confirmPassword" 
                                        @on-change="updateConfirmPassword" 
                                        @on-blur="blurConfirmPassword" 
                                        :isValid="validations.confirmPassword.isValid" 
                                        :validationMessage="validations.confirmPassword.message"
                                        >
                                    </TextInput>
                                </div>
                            </div> 
                            <button type="submit" class="btn btn-primary my-4 signup-button">
                                sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from '../components/BaseComponents/Inputs/TextInput.vue';
    import Alert from '../components/BaseComponents/Alert.vue';
    import { createUser } from '../middleWare'
    export default {
        name: 'SignUp',
        data(){
            return{
                newUser:{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                },
                validations:{
                    firstName: {
                        isValid: true,
                        message: ""
                    },
                    lastName: {
                        isValid: true,
                        message: ""
                    },
                    email: {
                        isValid: true,
                        message: ""
                    },
                    phone: {
                        isValid: true,
                        message: ""
                    },
                    password: {
                        isValid: true,
                        message: ""
                    },
                    confirmPassword: {
                        isValid: true,
                        message: ""
                    },
                },
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        methods:{
            onSubmit(event){
                event.preventDefault()
                this.blurForm()
                if (!this.validations.firstName.isValid) return 
                if (!this.validations.lastName.isValid) return 
                if (!this.validations.email.isValid) return 
                if (!this.validations.phone.isValid) return 
                if (!this.validations.password.isValid) return 
                if (!this.validations.confirmPassword.isValid) return 
                createUser(this.newUser, this.setAlertData, this.navigateHome)
            },           
            navigateHome(){
                this.$router.replace('/')
            },
            updateFirstName(value){
                this.newUser.firstName = value
            },
            updateLastName(value){
                this.newUser.lastName = value
            },
            updateEmail(value){
                this.newUser.email = value
            },
            updatePhone(value){
                this.newUser.phone = value
            },
            updatePassword(value){
                this.newUser.password = value
            },
            updateConfirmPassword(value){
                this.newUser.confirmPassword = value
            },
            blurForm(){
                this.blurFirstName()
                this.blurLastName()
                this.blurEmail()
                this.blurPhone()
                this.blurPassword()
                this.blurConfirmPassword
            },
            blurFirstName(){
                if (this.newUser.firstName.length === 0) {
                    this.validations.firstName.isValid = false
                    this.validations.firstName.message = "Please enter your first name"
                }
            },
            blurLastName(){
                if (this.newUser.lastName.length === 0) {
                    this.validations.lastName.isValid = false
                    this.validations.lastName.message = "Please enter your last name"
                }
            },
            blurEmail(){
                if (this.newUser.email.length === 0) {
                    this.validations.email.isValid = false
                    this.validations.email.message = "Please enter an email"
                }
                else if (!this.newUser.email.includes("@")) {
                    this.validations.email.isValid = false
                    this.validations.email.message = "Email is not valid"
                }
            },
            blurPhone(){
                if (this.newUser.phone.length !== 10) {
                    this.validations.phone.isValid = false
                    this.validations.phone.message = "Phone number should be 10 digits"
                }
            },
            blurPassword(){
                if (this.newUser.password.length === 0) {
                    this.validations.password.isValid = false
                    this.validations.password.message = "Please enter a password"
                }
                else if (this.newUser.password.length < 8) {
                    this.validations.password.isValid = false
                    this.validations.password.message = "Must Contain 8 characters or more"
                }
            },
            blurConfirmPassword(){
                if (this.newUser.confirmPassword.length === 0) {
                    this.validations.confirmPassword.isValid = false
                    this.validations.confirmPassword.message = "Please enter the password again"
                }
                else if (this.newUser.confirmPassword !== this.newUser.password) {
                    this.validations.confirmPassword.isValid = false
                    this.validations.confirmPassword.message = "Passwords must match"
                }
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
        watch:{
            'newUser.firstName':{
                handler(){
                    if (this.newUser.firstName.length > 0) {
                        this.validations.firstName.isValid = true
                    }
                },
                deep: true
            },
            'newUser.lastName':{
                handler(){
                    if (this.newUser.lastName.length > 0) {
                        this.validations.lastName.isValid = true
                    }
                },
                deep: true
            },
            'newUser.email':{
                handler(){
                    if (this.newUser.email.includes('@')) {
                        this.validations.email.isValid = true
                    }
                },
                deep: true
            },
            'newUser.phone':{
                handler(){
                    if (this.newUser.phone.length === 10) {
                        this.validations.phone.isValid = true
                    }
                },
                deep: true
            },
            'newUser.password':{
                handler(){
                    if (this.newUser.password.length >= 8) {
                        this.validations.password.isValid = true
                    }
                },
                deep: true
            },
            'newUser.confirmPassword':{
                handler(){
                    if (this.newUser.confirmPassword === this.newUser.password) {
                        this.validations.confirmPassword.isValid = true
                    }
                },
                deep: true
            },
        },
        components:{
            TextInput,
            Alert
        }
    }
</script>

<style scoped>
.signup-page-container{
    display: flex;
    /* align-items: center; */
}

.signup-background{
    /* padding-top: 95px; */
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 120vh;
    background-image: url("https://www.creativefabrica.com/wp-content/uploads/2021/07/01/3d-podium-product-display-background-Graphics-14126338-1-1-580x387.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.add-another-container{
    padding-top: 5px;
    margin: 0 25%;
    width: 100%;
}

.sign-up-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-up{
    width: 80%;
}

.align-center{
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.3rem;
}

.color-white{
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 2px 2px rgba(4, 17, 29, 0.5) ;
}

.shadow{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgba(255, 255, 255, 0.9);
}

.error-message{
    color: red;
}

@media only screen and (max-width: 1000px){
    .add-another-container{
        padding-top: 5px;
        margin: 0 15%;
        width: 100%;
    }
}

@media only screen and (max-width: 700px){
    .add-another-container{
        padding-top: 5px;
        margin: 0 0;
        width: 100%;
    }
}

@media only screen and (max-width: 500px){
    .input-lable{
        margin-left: 3vw !important;
        margin-top: 1vw !important;
        font-size: 3vw;
    }

    .email-input{
        height: 60px;
    }
}
</style>