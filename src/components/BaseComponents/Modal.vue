<template>
    <div class='modal-container'>
        <button v-if="!setOpenOutside" type="button" :class="`btn btn-${btnType} ${costumeButtonClass}`" @click="open = true">{{openModalName}}</button>
        <div v-if="setOpenOutside ? outsideOpen : open" class='modal-background'>
        <Alert :alertType="alertType" :isHidden="showAlert" :setIsHidden="setIsHidden">
            {{ alertMessage }}
        </Alert>
            <div :class="`modal-fade-container ${size}`">
                <div class='modal-title-contianer modal-header'>
                    <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
                    <button @click="() => {
                        if (setOpenOutside) 
                            closeFromOutside()
                        else
                            open = false
                    }" type="button" class="btn-close"></button>
                </div>
                <div :class="{ 'add-overflow' : overflow }">
                    <div :class="'modal-body-contianer'">
                        <slot>
                            <h1>Nothing to show here</h1>
                        </slot>
                    </div>
                </div>
                <div class='modal-footer-contianer modal-footer'>
                    <button type="button" class="btn btn-success" @click="handleSubmit()">submit</button>
                    
                    <button @click="() => {
                        if (setOpenOutside) 
                            closeFromOutside()
                        else
                            open = false
                    }" type="button" class="btn btn-secondary close-btn">Close</button>
                    
                    
                </div>
            </div>
            <slot name="illustration">

            </slot>
        </div>
    </div>
</template>

<script>
    import Alert from './Alert.vue'
    export default {
        name: 'Modal',
        data(){
            return{
                open: false
            }
        },
        components:{
            Alert
        },
        props:{
            openModalName: {
                type: String,
                default: 'Open Modal'
            },
            title: {
                type: String,
                default: 'Modal Title'
            },
            btnType: {
                type: String,
                default: 'primary'
            },
            costumeButtonClass: {
                type: String,
            },
            overflow: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                required: false
            },
            setOpenOutside: {
                type: Boolean,
                required: false,
                default: false
            },
            outsideOpen: {
                type: Boolean,
                required: false,
                default: false
            },
            closeFromOutside: {
                type: Function,
                required: false,
            },
            handleSubmit: {
                type: Function,
                required: true,
            },
            alertType:{
                type: String
            },
            alertMessage:{
                type: String
            },
            showAlert:{
                type: Boolean,
                default: false
            },
            setIsHidden:{
                type: Function,
            },
        }
    }
</script>

<style scoped>
.add-product-btn{
    min-width: max-content;
}

.modal-background{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100vh;
    width: 100%;
    left: 0%;
    top: 0%;
}

.modal-fade-container{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 13px;
    height: fit-content;
    width: 40%;
}

@media only screen and (max-width: 850px){
    .modal-fade-container{
        width: 60%;
    }
}

@media only screen and (max-width: 550px){
    .modal-fade-container{
        width: 80%;
    }
}

.large{
    width: 85%;
}

.add-overflow{
    overflow-y: scroll;
    overflow-x: hidden;
}

.modal-title-contianer{
    padding: 20px 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.modal-body-contianer{
    margin-top: 20px;
    max-height: 64vh;
    padding: 0px 30px;
}

.demo-container{
    display: flex;
    justify-content: center;
}

.demo-card-container{
    position: absolute;
    cursor: pointer;
}

.click-here-icon{
    position: absolute;
    bottom: 14%;
    left: 5%;
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.8rem;
}

@media only screen and (max-width: 800px){

    .demo-card-container{
        top: 30%
    }

    .demo-card-title{
        font-size: 1.5rem;
    }

    .click-here-icon{
        position: absolute;
        bottom: 18%;
        left: 5%;
        color: rgba(255, 255, 255, 0.85);
        font-size: 1.8rem;
    }
}
@media only screen and (max-width: 600px){

    .demo-card-container{
        top: 65%;
        right: 1%;
    }
    
}

.modal-footer-contianer{
    display: flex;
    justify-content: space-between;
    padding: 2% 3%;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    height: fit-content;
    border-bottom-left-radius: 13px;
    border-bottom-right-radius: 13px;
}

.popup-alert{
    position: absolute;
    top: 1%;
    width: 35%;
    opacity: 90%;
}

.close-btn{
    margin-right: 3% ;
}

.error-message{
    color: red;
}
</style>