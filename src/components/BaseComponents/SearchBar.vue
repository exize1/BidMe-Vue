<template>
    <form class="search-input-container" role="search">
        <input v-model="searchTerm" class="search-input"  data-bs-toggle="dropdown"  type="search" placeholder="Search" aria-label="Search"/>
        <ul class="dropdown-menu search-dropdown-list">
                <template v-if="filterSearchProducts(searchTerm).length === 0">
                    <li ><p class="unfound-dropdown-item">No such product</p></li>
                </template>
                 <template v-else>
                     <RouterLink v-for="(product, index) in filterSearchProducts(searchTerm)" :key="index" class="remove-decoration" :to="`/auctions/${product._id}`">
                         <li v-if="index < 3"><a class="dropdown-item" href="#search">{{product.productName}}</a></li>
                     </RouterLink>
                 </template>

        </ul>
    </form>
</template>

<script>
    import { RouterLink } from "vue-router";
    export default {
        name: 'SearchBar',
        data(){
            return{
                searchTerm: ''
            }
        },
        methods: {
            filterSearchProducts(filterKey) {
            return(
                this.$store.state.products.filter((val) => {
                    if(val){
                        if(filterKey === ""){
                            return val;
                        }else if(val.productName.toLowerCase().includes(filterKey.toLowerCase())){
                            return val;
                        }
                        else return null
                    }
                    })
                    )
                }
            }
    }
</script>

<style  scoped>
.search-input-container{
    align-items: center;
}
.search-dropdown-list{
    width: 100%;
    max-width: 200px;
    margin-right: 7px;
}
.unfound-dropdown-item{
    margin-left: 6% ;
} 
.search-input{
    padding: 7px 10px;
    width: 30vw;
    max-width: 300px;
    border-radius: 5px;
    border: 1px solid #ced4da;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.search-input:focus{
    border: 1px solid #86b7fe;
    outline: 0;
    box-shadow: rgb(13 110 253 / 25%) 0px 0px 0px 0.25rem;
}

</style>