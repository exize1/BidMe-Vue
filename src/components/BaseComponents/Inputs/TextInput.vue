<template>
    <div class="form-floating " :class="`${costumeClass} ${!removeMarginTop && 'mt-3'}` ">
        <input :type="inputType" class="form-control" id="floatingInput" 
            :value="value" 
            :placeholder="placeholder"
            @input="$emit('on-change', $event.target.value)"
            @blur="$emit('on-blur', $event.target.value)"/>
        <label htmlFor="floatingInput">{{ label }}</label>
        <p v-show="!isValid" class="error-message mb-0">{{ !isValid && validationMessage }}</p>
    </div>
</template>

<script>
    export default {
        name: "TextInput",
        props:{
            label:{
                type: String,
                required: true,
            },
            value:{
                type: String,
                required: true,
            },
            placeholder:{
                type: String,
                required: true,
            },
            isValid:{
                type: Boolean,
                required: false,
            },
            validationMessage:{
                type: String,
                required: false,
            },
            inputType:{
                type: String,
                default: "text"
            },
            costumeClass:{
                type: String,
            },
            removeMarginTop:{
                type: Boolean,
                default: false
            },

        },
        emtis: ['on-change', 'on-blur'],
    }
</script>

<style scoped>
</style>