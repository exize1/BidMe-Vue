<template>
        <div>
            <Modal title="" btnType="success" 
            openModalName="Bid" 
            :alertMessage="alertMessage"
            :alertType="alertType"
            :showAlert="showAlert"
            :setIsHidden="hideAlert"
            :handleSubmit="onSubmit"
            >
                    <form noValidate>
                        
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input name="price" type="number" v-model="price" class="form-control" placeholder='Bid Price'/>
                        </div>
                    </form>
            </Modal>
        </div>
</template>

<script>
import Modal from '../BaseComponents/Modal.vue'
import { changeProductPrice } from '../../middleWare'
    export default {
        name: 'AddBid',
        data(){
            return{
                price: 0,
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        methods: {
            onSubmit(){

                const date = new Date()
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                const userData = this.$store.state.user.data

                const value = {
                    biderId: userData._id,
                    biderName: userData.firstName + " " + userData.lastName,
                    bidDate:  new Intl.DateTimeFormat('he-IS', options).format(date),
                    price: this.price,
                    productId: this.product._id,
                };
                const checkValue = {
                    price: this.price,
                    biderId: userData._id,
                }
                changeProductPrice(checkValue, value, this.setAlertData)
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
        props:{
            product:{
                type: Object,
            },
        },
        components: {
            Modal
        }
    }
</script>

<style lang="scss" scoped>

</style>