<template>
    <AdvancedImage v-if="imageId" :cldImg="cld.image(imageId)" class="image"></AdvancedImage>
    <img v-else src="https://res.cloudinary.com/diggwedxe/image/upload/yzzf6ol9bbn6qkdhkhbl?_a=BALFJtDL0" alt="">
</template>

<script>
import { AdvancedImage } from '@cloudinary/vue'
import { Cloudinary } from '@cloudinary/url-gen'
    export default {
        name: 'CloudImage',
        data(){
            return{
                cld: new Cloudinary({
                    cloud: {
                        cloudName: "diggwedxe"
                    }
                }),
            }
        },
        components: {
            AdvancedImage
        },
        props:{
            imageId: String
        }
    }
</script>

<style  scoped>

</style>