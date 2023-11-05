<template>
    <div :class="`alert alert-${alertType} popup-alert mb-4 ${costumeClass}`" role="alert" :hidden="!isHidden">
        <slot>
            Somthing went wrong
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'Alert',
        data() {
            return {
            isVisible: false,
            message: "Form submitted successfully!", // Customize the message
            };
        },
        updated() {
            if (this.isHidden) {
                setTimeout(() => {
                        this.setIsHidden()
                    }, 1500);
            }
        },
        
        props:{
            alertType:{
                type: String
            },
            costumeClass:{
                type: String
            },
            isHidden:{
                type: Boolean,
            },
            setIsHidden:{
                type: Function,
            },
        }
    }
</script>

<style  scoped>
.popup-alert{
    position: absolute;
    top: 1%;
    width: 35%;
    opacity: 90%;
    text-align: center;
}

.position{
    top: 10% !important; 
    right: 34%;
}

</style>