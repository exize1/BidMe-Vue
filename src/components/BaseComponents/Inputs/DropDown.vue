<template>
    <div class="input-group mt-3 col-2">
        <select class="form-select" id="inputGroupSelect02" 
        :value="value" 
        @input="$emit('on-change', $event.target.value)"
        @blur="$emit('on-blur', $event.target.value)">
            <option value="">{{ defaultValue }}</option>
            <option v-for="(item, index) in items" :key="index" :value="item">
                {{ item }}
            </option>
        </select>
        <label class="input-group-text" htmlFor="inputGroupSelect02">{{ label }}</label>
    </div>
    <p v-show="!isValid" class="error-message mb-0">{{ !isValid && validationMessage }}</p>
</template>

<script>
    export default {
        name: "DropDown",
        props:{
            label:{
                type: String,
                required: true,
            },
            items:{
                type: Array,
                required: true,
            },
            value:{
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
            defaultValue:{
                type: String,
            }
        },
        emtis: ['on-change', 'on-blur'],
    }   
</script>

<style lang="scss" scoped>

</style>