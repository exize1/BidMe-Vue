<template>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop by category
            </button>
            <ul className="dropdown-menu add-overflow">
                <template v-for="(categoryItem, index) in categories" :key="index">
                    <li @click="$emit('set-category', categoryItem.category)"><a className="dropdown-item" :href="`#${categoryItem.category}`">{{categoryItem.categoryName}}</a></li>
                </template>
            </ul>
        </div>
</template> 

<script>
    export default {
        name: 'FilterByCategory',
        data() {
            return {
                categories: [
                    { category: "", categoryName: "All" },
                    { category: "collectibles", categoryName: "Collectibles & Art" },
                    { category: "electronics", categoryName: "Electronics"},
                    { category: "fashion", categoryName: "Fashion" },
                    { category: "home", categoryName: "Home & Garden" },
                    { category: "accessories", categoryName: "Accessories" },
                    { category: "musical", categoryName: "Musical Instruments" },
                    { category: "sporting", categoryName: "Sporting" },
                    { category: "toys", categoryName: "Toys & Hobbies" },
                    { category: "other", categoryName: "Other" }
                ],
            };
        },
    }
</script>

<style scoped>

</style>