<template>
<div class="settings-details-container">
            <div class="un-show-below-820 row">
                <div class="col-6 ">
                    <Modal :handleSubmit="onSubmit" overflow="add-overflow" title="Adding Credit Card" btnType="" openModalName="Change Credit Card" costumeButtonClass="ps-0 mb-2"
                    :alertMessage="alertMessage"
                    :alertType="alertType"
                    :showAlert="showAlert"
                    :setIsHidden="hideAlert">
                        <form noValidate>
                            <TextInput placeholder="Card Number" inputType="number" label="Card Number"
                                :value="tempCardNumber" 
                                @on-change="updateCreditCardNumber" 
                                @on-blur="blurCardNumber" 
                                :isValid="validations.cardNumber.isValid"
                                :validationMessage="validations.cardNumber.message"/>
                            <DropDown label="Month" :value="creditCard.month" 
                                defaultValue="Month"
                                :items="months"
                                @on-change="updateMonth" 
                                @on-blur="blurMonth" 
                                :isValid="validations.month.isValid"
                                :validationMessage="validations.month.message">
                            </DropDown>
                            <DropDown label="Year" :value="creditCard.year" 
                                defaultValue="Year"
                                :items="years"
                                @on-change="updateYear" 
                                @on-blur="blurYear" 
                                :isValid="validations.year.isValid"
                                :validationMessage="validations.year.message">
                            </DropDown>
                            <TextInput placeholder="CVV" inputType="number" label="CVV" 
                                :value="creditCard.cvv" 
                                @on-change="updateCvv" 
                                @on-blur="blurCvv" 
                                :isValid="validations.cvv.isValid" 
                                :validationMessage="validations.cvv.message"/>

                            <TextInput placeholder="ID Number" inputType="number" label="ID Number"
                                :value="creditCard.idNumber" 
                                @on-change="updateIdNumber" 
                                @on-blur="blurIdNumber" 
                                :isValid="validations.idNumber.isValid" 
                                :validationMessage="validations.idNumber.message"
                                costumeClass="mb-3"/>
                        </form>
                    </Modal>
                    <p class="delist-all-botton">Change password</p>
                    <p class="delist-all-botton">Delist all my Auctions</p>
                    <p class="delete-botton" @Click="() => handleDelete (user._id)">Delete Account</p>
                </div>
                <div class="credit-card-container col-6">
                    <div class="credit-card row">
                        <div class="col-4 pe-0">
                            <div class="chip-container">
                                <CloudImage imageId="credit_card_chip_hbndve" class="chip"/>
                            </div>
                        </div>
                        <div class="col ps-0">
                            <h4 class="credit-card-name">Visa</h4>
                            <div class="credit-card-number">
                                <p class="mb-0">{{card ? card.cardNumber : "xxxx-xxxx-xxxx-xxxx"}}</p>
                            </div>
                            <div class="credit-card-validity">
                                <p class="mb-0 valid">valid end</p>
                                <p class="mb-0 ms-2">{{(card ? card.month : "MM") + "/" + (card.year ? card.year : "YY") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="un-show-above-820">
                <div class="row settings-font-size">
                    <div class="col">
                    <Modal :handleSubmit="onSubmit" overflow="add-overflow" title="Adding Credit Card" btnType="" 
                        openModalName="Change Credit Card" costumeButtonClass="ps-0 mb-2"
                        :alertMessage="alertMessage"
                        :alertType="alertType"
                        :showAlert="showAlert"
                        :setIsHidden="hideAlert">
                            <form noValidate>
                                <TextInput placeholder="Card Number" inputType="number" label="Card Number"
                                :value="tempCardNumber" 
                                @on-change="updateCreditCardNumber" 
                                @on-blur="blurCardNumber" 
                                :isValid="validations.cardNumber.isValid"
                                :validationMessage="validations.cardNumber.message"/>
                            <DropDown label="Month" :value="creditCard.month" 
                                defaultValue="Month"
                                :items="months"
                                @on-change="updateMonth" 
                                @on-blur="blurMonth" 
                                :isValid="validations.month.isValid"
                                :validationMessage="validations.month.message">
                            </DropDown>
                            <DropDown label="Year" :value="creditCard.year" 
                                defaultValue="Year"
                                :items="years"
                                @on-change="updateYear" 
                                @on-blur="blurYear" 
                                :isValid="validations.year.isValid"
                                :validationMessage="validations.year.message">
                            </DropDown>
                            <TextInput placeholder="CVV" inputType="number" label="CVV" 
                                :value="creditCard.cvv" 
                                @on-change="updateCvv" 
                                @on-blur="blurCvv" 
                                :isValid="validations.cvv.isValid" 
                                :validationMessage="validations.cvv.message"/>

                            <TextInput placeholder="ID Number" inputType="number" label="ID Number"
                                :value="creditCard.idNumber" 
                                @on-change="updateIdNumber" 
                                @on-blur="blurIdNumber" 
                                :isValid="validations.idNumber.isValid" 
                                :validationMessage="validations.idNumber.message"
                                costumeClass="mb-3"/>
                                <!-- <button type="submit" class="btn btn-primary mb-4">Submit</button> -->
                                <!-- <div :class="`alert alert-${alertType} popup-alert mb-4`" role="alert" hidden={alert}>
                                    {alertMessage}
                                </div> -->
                            </form>
                    </Modal>
                        <p class="delist-all-botton">Change password</p>
                    </div>
                    <div class="col">
                        <p class="delist-all-botton">Delist all my Auctions</p>
                        <p class="delete-botton" @click="() => handleDelete (user._id)">Delete Account</p>
                    </div>
                </div>
                <div class="credit-card-container">
                    <div class="credit-card row">
                        <div class="col-4 pe-0">
                            <div class="chip-container">
                                <CloudImage imageId="credit_card_chip_hbndve" class="chip"/>
                            </div>
                        </div>
                        <div class="col ps-0">
                            <h4 class="credit-card-name">Visa</h4>
                            <div class="credit-card-number">
                                <p class="mb-0">{{card.cardNumber ? card.cardNumber : "xxxx-xxxx-xxxx-xxxx"}}</p>
                            </div>
                            <div class="credit-card-validity">
                                <p class="mb-0 valid">valid end</p>
                                <p class="mb-0 ms-2">{{(card.month ? card.month : "MM") + "/" + (card.year ? card.year : "YY") }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import Modal from '../BaseComponents/Modal.vue'
    import CloudImage from '../BaseComponents/CloudImage.vue';
    import TextInput from '../BaseComponents/Inputs/TextInput.vue';
    import DropDown from '../BaseComponents/Inputs/DropDown.vue';
    import { addCreditCard } from '../../middleWare';

    export default {
        name: "Settings",
        data(){
            return{
                creditCard:{
                    cardNumber: "",
                    month: "",
                    year: "",
                    cvv: "",
                    idNumber: "",
                },
                validations:{
                    cardNumber: {
                        isValid: true,
                        message: ""
                    },
                    cvv: {
                        isValid: true,
                        message: ""
                    },
                    idNumber: {
                        isValid: true,
                        message: ""
                    },
                    month: {
                        isValid: true,
                        message: ""
                    },
                    year: {
                        isValid: true,
                        message: ""
                    },
                },
                tempCardNumber: "",
                months: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12],
                years: [23, 24, 25, 26, 27, 28 ,29, 30, 31, 32, 33, 34, 35, 36],
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        methods:{
            onSubmit(){
                addCreditCard(this.$store.state.user.data._id, this.creditCard, this.setAlertData)
            },
            updateCreditCardNumber(value){
                let fourDigits = []
                this.tempCardNumber = value
                const length = value.length
                for(let i = 0; i < length; i += 4){
                    fourDigits.push(value.substr(i, 4))
                }
                this.creditCard.cardNumber = fourDigits.join('-')
            },
            updateCvv(value){
                this.creditCard.cvv = value
            },
            updateIdNumber(value){
                this.creditCard.idNumber = value
            },
            updateMonth(value){
                this.creditCard.month = value
            },
            updateYear(value){
                this.creditCard.year = value
            },
            blurCardNumber(){
                if (this.tempCardNumber.length !== 16) {
                    this.validations.cardNumber.isValid = false
                    this.validations.cardNumber.message = "Credit card number must be 16 digits"
                }
            },
            blurCvv(){
                if (this.creditCard.cvv.length !== 3) {
                    this.validations.cvv.isValid = false
                    this.validations.cvv.message = "CVV number must be 3 digits"
                }
            },
            blurIdNumber(){
                if (this.creditCard.idNumber.length !== 9) {
                    this.validations.idNumber.isValid = false
                    this.validations.idNumber.message = "Id number must be 9 digits"
                }
            },
            blurMonth(){
                if (!this.months.includes(Number(this.creditCard.month))) {
                    this.validations.month.isValid = false
                    this.validations.month.message = "Month is a required field"
                }
            },
            blurYear(){
                if (!this.years.includes(Number(this.creditCard.year))) {
                    this.validations.year.isValid = false
                    this.validations.year.message = "Year is a required field"
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
        computed:{
            card(){
                if(this.$store.state.cardData) return this.$store.state.cardData
                else return false
               
            },

        },
        watch:{
            tempCardNumber(){
                if (this.tempCardNumber.length === 16) {
                    this.validations.cardNumber.isValid = true
                }
            },
            'creditCard.cvv':{
                handler(){
                    if (this.creditCard.cvv.length === 3) {
                        this.validations.cvv.isValid = true
                    }
                },
                deep: true
            },
            'creditCard.idNumber':{
                handler(){
                    if (this.creditCard.idNumber.length === 9) {
                        this.validations.idNumber.isValid = true
                    }
                },
                deep: true
            },
            'creditCard.month':{
                handler(){
                    if (this.months.includes(Number(this.creditCard.month))) {
                        this.validations.month.isValid = true
                    }
                },
                deep: true
            },
            'creditCard.year':{
                handler(){
                    if (this.years.includes(Number(this.creditCard.year))) {
                        this.validations.year.isValid = true
                    }
                },
                deep: true
            },
        },
        components:{
            Modal,
            CloudImage,
            TextInput,
            DropDown
        }
    }
</script>

<style scoped>
.settings-details-container{
    width: 93%;
    text-align: start;
}

.credit-card-container{
    display: flex;
    justify-content: center;
}

.credit-card{
    background: hsla(209, 63%, 92%, 1);
    background: linear-gradient(315deg, hsla(209, 63%, 92%, 1) 0%, hsla(43, 74%, 49%, 1) 0%, hsla(43, 74%, 49%, 1) 36%, hsla(43, 100%, 73%, 1) 100%);
    background: -moz-linear-gradient(315deg, hsla(209, 63%, 92%, 1) 0%, hsla(43, 74%, 49%, 1) 0%, hsla(43, 74%, 49%, 1) 36%, hsla(43, 100%, 73%, 1) 100%);
    background: -webkit-linear-gradient(315deg, hsla(209, 63%, 92%, 1) 0%, hsla(43, 74%, 49%, 1) 0%, hsla(43, 74%, 49%, 1) 36%, hsla(43, 100%, 73%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#DCEAF7", endColorstr="#DAA520", GradientType=1 );

    width: 300px;
    height: 175px;
    border-radius: 13px;
    box-shadow: rgba(4, 17, 29, 0.623) 0px 0px 8px 0px;
}

.credit-card-name{
    text-align: end;
    margin-right: 3%;
    margin-bottom: 0;
    padding-top: 5%;
}

.chip-container{
    height: 100%;
    display: flex;
    align-items: center;
}

.chip{
    max-height: 90px;
    min-height: 90px;
}

.credit-card-number{
    margin-top: 26%;
    margin-left: 7%;
    margin-bottom: 1%;
}

.credit-card-validity{
    margin-bottom: 4%;
    margin-left: 67%;
    font-size: 0.7rem;
}

.valid{
    font-size: 0.6rem;
}

.delist-all-botton{
    cursor: pointer;
}

.delete-botton{
    color: red;
    cursor: pointer;
    text-decoration: underline;
}

@media only screen and (max-width: 530px) {
    .settings-font-size{
        font-size: 3vw !important;
    }

    .credit-card-container{
        display: flex;
        justify-content: center;
        margin-top: 5%;
    }
    
    .credit-card{
        width: 200px;
        height: 115px;
    }

    .credit-card-name{
        font-size: 1.2rem;
    }

    .chip-container{
        height: 90%;
    }

    .chip{
        max-height: 60px;
        min-height: 60px;
    }

    .credit-card-number{
        font-size: 0.65rem;
    }

    .credit-card-validity{
        font-size: 0.55rem;
        margin-left: 60%;
    }

    .valid{
        font-size: 0.5rem;
    }

}
</style>