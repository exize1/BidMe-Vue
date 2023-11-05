<template>
    <Modal costumeButtonClass="title-size" title="Bider Details" btnType="primary" openModalName="Bider Details" 
    getBider={getBider} body={body}>
        <p><b>Name:</b> {{biderDetails.firstName ? biderDetails.firstName + " " + biderDetails.lastName : "Deleted user"}}</p>
        <p><b>Email:</b> {{biderDetails.email ? biderDetails.email : "No email found"}}</p>
        <p><b>Phone Number:</b>  {{biderDetails.phone ? "+972" + biderDetails.phone : "No phone found"}} </p>
    </Modal>
</template>

<script>
    import Modal from '../BaseComponents/Modal.vue'
    import { getBider } from '../../middleWare'
    export default {
        name: 'BiderDetails',
        data(){
            return{
                biderDetails: {},
                body: { 
                    productId: this.product._id 
                }
            }
        },
        methods:{
            updateBiderDetails(value){
                this.biderDetails = value
            }
        },
        mounted(){
            // getBider(this.body, this.updateBiderDetails)
        },
        components:{
            Modal
        },
        props:{
            product:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
</style>