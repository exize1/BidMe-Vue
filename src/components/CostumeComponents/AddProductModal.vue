<template>
    <Modal :handleSubmit="onSubmit" :openModalName="'+ Add Product'" 
    :title="'Add New Product'" :size="'large'" :overflow="true"
    :alertMessage="alertMessage"
    :alertType="alertType"
    :showAlert="showAlert"
    :setIsHidden="hideAlert"
    >
        <div class="row">
            <div class="col">
                <form noValidate>
                    <div class="form-floating mb-3">
                        <input name="productName" type="text"  v-model="product.productName" class="form-control" id="floatingInput" ref="inputRef" placeholder="Product Name"/>
                        <label htmlFor="floatingInput">Product Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <label class="input-group-text" htmlFor="inputGroupFile01">{{selectedImageName === "" ? "Add Photo" : selectedImageName}}</label>
                        <input name="src" type="file" class="form-control" id="inputGroupFile01" @change="onSelectfile"/>
                    </div>
                    <div class="input-group">
                        <select name="category" class="form-select" id="inputGroupSelect02" v-model="product.category">
                            <option value="">Choose one...</option>
                            <option value="collectibles">Collectibles & Art</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion </option>
                            <option value="home">Home & Garden</option>
                            <option value="accessories">Accessories</option>
                            <option value="musical">Musical Instruments </option>
                            <option value="sporting">Sporting</option>
                            <option value="toys">Toys & Hobbies</option>
                            <option value="other">Other </option>
                        </select>
                        <label class="input-group-text" htmlFor="inputGroupSelect02">Categories</label>
                    </div>
                    <div class="input-group my-3">
                        <span class="input-group-text">$</span>
                        <input name="initialPrice" type="number" class="form-control" placeholder='Initial Price' v-model="product.initialPrice"/>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea name="description" type="text" class="form-control" id="floatingInput" placeholder="Description" v-model="product.description" ></textarea>
                        <label htmlFor="floatingInput">Description</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input name="amountOfDays" type="number" class="form-control" id="floatingInput" placeholder="Auction Duration" v-model="duaration" />
                        <label htmlFor="floatingInput">Auction Duration</label>
                    </div>
                </form>
            </div>
            <div class="col demo-container un-show-below-600">
                <div class='demo-card-container'>
                    <h2 class='demo-card-title'>Demo card</h2>
                    <div @click="Illustration = !Illustration">
                        <DemoCard :demo="true" :product="product" :selectedImageUrl="selectedImageUrl" />
                        <FontAwesomeIcon icon="fa-hand-point-up" class='click-here-icon'/>
                    </div>
                </div>
            </div>
        </div>
        <template v-slot:illustration>
            <ProductViewIllustartion v-if="Illustration" :selectedImageUrl="selectedImageUrl" :product="product" :duaration="duaration" />
        </template>
    </Modal>
</template>

<script>
    import Modal from '../BaseComponents/Modal.vue'
    import DemoCard from '../BaseComponents/Card.vue'
    import ProductViewIllustartion from './ProductViewIllustartion.vue'
    import { addProduct } from '../../middleWare'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import Alert from '../BaseComponents/Alert.vue'
    export default {
        name: 'AddProductModal',
        data(){
            return{
                product:{
                    userId: this.$store.state.user.data._id,
                    image: "",
                    productName: "",
                    description: "",
                    category: "",
                    initialPrice: "",
                    latestPrice: "",
                    numberOfBids: "0", 
                    initialDate: "",
                    endingDate: "",
                    hasEnded: false
                },
                duaration: "",
                date: new Date(),
                selectedImageUrl: "",
                selectedImageName: "",
                Illustration: false,
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        methods:{
            onSubmit(){
                this.product.latestPrice = this.product.initialPrice
                addProduct(this.product, this.setAlertData)
            },
            setAlertData(data){
                if(data == null) return
                this.alertType = data.alertType 
                this.alertMessage = data.message 
                this.showAlert = true 
            },
            hideAlert(){
                this.showAlert = false
            },
            transformFile(event){
                const reader = new FileReader()
                const file = event.target.files[0]
                if(file){
                    reader.readAsDataURL(file)
                    reader.onloadend = () => this.product.image = reader.result
                }else
                    this.product.image = ""
            },
            onSelectfile(event){
                this.selectedImageUrl = URL.createObjectURL(event.target.files[0])
                this.selectedImageName = event.target.files[0].name
                this.transformFile(event)
            },
            formatedDate(date){
                const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
                const formatedDate = new Intl.DateTimeFormat('he-IS', options).format(date);
                return formatedDate
            },
            setEndDate(){
                const endDate = new Date();
                endDate.setDate(this.date.getDate() + this.duaration)
                this.product.endingDate = this.formatedDate(endDate)
            }

        },
        watch:{
            duaration(){
                this.setEndDate()
            },
        },
        mounted(){
            this.product.initialDate = this.formatedDate(this.date)
            this.setEndDate()
        },
        components:{
            Modal,
            DemoCard,
            ProductViewIllustartion,
            FontAwesomeIcon,
            Alert
        }
    }
</script>

<style scoped>
.form-floating > label{
    width: 100%;
}

.input-group-text{
    background-color: #E9EBEF;
}
.click-here-icon{
    position: absolute;
    bottom: 14%;
    left: 5%;
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.8rem;
}
.demo-card-container{
    position: absolute;
    cursor: pointer;
}
.demo-container{
    display: flex;
    justify-content: center;
}

</style>