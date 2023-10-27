<template>
    <form class="search-input-container" role="search">
        <input class="search-input"  data-bs-toggle="dropdown"  type="search" placeholder="Search" aria-label="Search"/>
    </form>
</template>

<script>
    export default {
        name: 'SearchBar'
    }
</script>

<style  scoped>
.search-input-container{
    align-items: center;
    width: 100%;
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