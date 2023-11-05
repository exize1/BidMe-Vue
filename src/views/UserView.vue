<template>
    <div class="home-background"/>
    <div class="user-page-container">
        <div class="profile-container">
            <div class="banner-container">
                <img src="https://img.freepik.com/free-psd/furniture-facebook-cover-web-banner-template_237398-329.jpg?w=2000" class="banner img-fluid" alt="banner"/>
            </div>
            <div class="profile-picture-container">
                <CloudImage :imageId="user.avatar.public_id" class="img-thumbnail"/>
                <div class="profile-picture-editor-container"  @click="isEditProfilePic = true">
                    <div class="profile-picture-editor">
                        <FontAwesomeIcon icon="fa-pen" />
                    </div>
                </div>
            </div>
            <div class="profile-name-container">
        <h2 class="profile-name">{{user.firstName + " " + user.lastName}}</h2>
            </div>
        </div>
        <Modal title="Change Profile Picture" :handleSubmit="onSubmit" :setOpenOutside="true" :outsideOpen="isEditProfilePic" 
            :closeFromOutside="() => isEditProfilePic = false"
            :alertMessage="alertMessage"
            :alertType="alertType"
            :showAlert="showAlert"
            :setIsHidden="hideAlert">
            <div :class="`alert alert-${alertType} popup-alert mb-4`" hidden={alert} role="alert">{alertMessage}</div>
            
            <div class="form-floating mb-3">
                <label class="input-group-text" htmlFor="inputGroupFile01">{{selectedImageName === "" ? "Add Photo" : selectedImageName}}</label>
                <input name="src" type="file" class="form-control" id="inputGroupFile01" @change="onSelectfile"/>
            </div>
        </Modal>
        <div class="options-container">
            <div class="buttons-container">
                <button :class="`btn user-buttons ${activeTab.auctions && 'underline'}`" @click="() => {
                    activeTab.auctions = true
                    activeTab.bids = false
                    activeTab.settings = false
                }">
                    My auctions
                </button>
                <button :class="`btn user-buttons ${activeTab.bids && 'underline'}`" @click="() => {
                    activeTab.auctions = false
                    activeTab.bids = true
                    activeTab.settings = false
                    userBids
                }">
                    My bids
                </button>
                
                <button :class="`btn user-buttons ${activeTab.settings && 'underline'}`" @click="() => {
                    activeTab.auctions = false
                    activeTab.bids = false
                    activeTab.settings = true
                    userProducts
                }">
                    Settings
                </button>
            </div>
            <div v-if="activeTab.auctions" class="user-cards-container">
                <template v-if="userProducts.length > 0">
                    <div v-for="product in userProducts" :key="product._id" class="user-card-container">
                        <UserCard :product="product" setAlert={setAlert}></UserCard>
                    </div>
                </template>
                <h1 v-else>No auctions yet</h1>
            </div>
            <div v-if="activeTab.bids" class="user-cards-container">
                <template v-if="userBids.length > 0">
                    <div v-for="userBid in userBids" :key="userBid._id" class="user-card-container">
                        <UserCard :product="filteredAuctions(userBid.productId)[0]">
                            <div className="btn-group dropup">
                                <button type="button" className="remove-borders" @click="handleCopy(filteredAuctions(userBid.productId)[0])">
                                    <div className='more-options-icon-container' >
                                        <FontAwesomeIcon icon="fa-link" />
                                    </div>
                                </button>
                            </div>
                        </UserCard>
                    </div>
                </template>
                <div v-else>
                    <h1>No Bids yet</h1>
                </div>
            </div>
            <div v-if="activeTab.settings" class="user-settings-container mb-5 ">
                <Settings/>
            </div>
        </div>
    </div>
</template>

<script>
    
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import CloudImage from '../components/BaseComponents/CloudImage.vue'
    import Modal from '../components/BaseComponents/Modal.vue'
    import UserCard from '../components/BaseComponents/UserCard.vue'
    import Settings from '../components/CostumeComponents/Settings.vue'
    import { editProfilePicture, getUserBids } from '../middleWare'

    
    export default {
        name: 'UserView',
        data(){
            return{
                user: {},
                activeTab:{
                    auctions: true,
                    bids: false,
                    settings: false,
                },
                isEditProfilePic: false,
                image: '',
                selectedImageUrl: '',
                selectedImageName: '',
                userId: "",
                userBids: [],
                alertMessage: "",
                alertType: "",
                showAlert: false
            }
        },
        created() {
            this.user = this.$store.state.user.data
            this.userId = this.$store.state.user.data._id
            getUserBids(this.userId, (data) => {
                this.userBids = data;
            });
        },
        computed:{
            userProducts(){
                return(
                    this.$store.state.products.filter((val) => {
                        if(this.userId === ""){
                            return val;
                        }else if(val.userId.includes(this.userId)){
                            return val;
                        }else return null
                    })
                )
            },
        },
        methods:{
            async handleCopy (product){
                const url = `${window.location.origin}/auctions/${product._id}`
                await navigator.clipboard.writeText(url)
            },
            transformFile(event){
                const reader = new FileReader()
                const file = event.target.files[0]
                if(file){
                    reader.readAsDataURL(file)
                    reader.onloadend = () => this.image = reader.result
                }else
                    this.image = ""
            },
            onSelectfile(event){
                this.selectedImageUrl = URL.createObjectURL(event.target.files[0])
                this.selectedImageName = event.target.files[0].name
                this.transformFile(event)
            },
            onSubmit(){
                editProfilePicture(this.image, this.user, this.setAlertData)
                // this.isEditProfilePic = false
                this.selectedImageUrl = ''
                this.selectedImageName = ''
            },
            filteredAuctions(id){
                return(
                    this.$store.state.products.filter((val) => {
                        if(id === ""){
                            return val;
                        }else if(val._id.includes(id)){
                            return val;
                        }else return null
                    })
                )
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
        components:{
            FontAwesomeIcon,
            CloudImage,
            Modal,
            UserCard,
            Settings
        }
    }
</script>

<style scoped>
.user-page-container{
}

.form-floating > label{
    width: 100%;
    border-color: black;
}

.banner-container{
    height: 300px !important;
}

.banner{
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.profile-picture-container{
    position: absolute !important;
    width: 180px;
    top: 300px;
    left: 7%;
}

@media only screen and (max-width: 872px){
    .banner-container{
        height: 250px !important;
    }
    
    .profile-picture-container{
        width: 150px;
        top: 250px;
    }

    .profile-picture-container:hover .profile-picture-editor-container{
        top: 0%;
        width: 150px !important;
        color: rgba(31, 29, 29, 0.76) !important;
        background-color: rgba(0, 0, 0, 0.171) !important;
        height: 100%;
        border-radius: 1.5%;
    }
    
    .profile-picture-editor{
        width: 150px !important;
        top: 5%;
        left: 36%;
    }
    
    .profile-name-container{
        text-align: start;
        margin-left: 8%;
        margin-top: 100px !important;
    }

    .profile-name{
        font-size: 1.8rem;
    }
}

.profile-picture-container:hover .profile-picture-editor-container{
    position: absolute !important;
    width: 180px;
    top: 0%;
    width: 180px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.397);
    color: rgba(240, 248, 255, 0.774);
    border-radius: 1.5%;
    cursor: pointer;
}

.profile-picture-editor{
    position: absolute !important;
    width: 180px;
    top: 5%;
    left: 36%;
}

.profile-name-container{
    text-align: start;
    margin-left: 8%;
    margin-top: 130px;
}

.options-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.buttons-container{
    display: flex;
    justify-content: flex-start;
    width: 86%;
}

.underline::after{
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, 0.911);
    height: 2px;
    width: 100%;
}
.user-buttons{

}

.details-container{
    
}

.img-thumbnail{
    object-fit: cover;
    min-width: 180px !important;
    max-width: 180px !important;
    min-height: 180px !important;
    max-height: 180px !important;
}

.seperate-line{
    color: black;
    background-color: black;
    height: 10vh;
}

.section-container{
    display: flex;
    justify-content: center;
    height: 100%;
}

.user-cards-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    min-height: 400px;
    width: 86%;
    border-radius: 20px;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgba(128, 128, 128, 0.349);
}

.user-settings-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    width: 86%;
    border-radius: 20px;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    background-color: rgba(128, 128, 128, 0.349);
}

.user-card-container{
    padding: 2% 0;
}
</style>