<script>
    import {store} from '../store'
export default{
    name:'HeaderC', data() {
        return {
            store
        }},

    methods: {
        emitSearchEvents() {
            this.$emit('movieSearch');
            this.$emit('serieSearch');
    }
}
}
</script>

<template>
    <header class="px-4 pt-3 d-flex justify-content-center align-items-center">
        <h1 style="color:#F0492F ;" class="ms-4">BOOLFLIX</h1>
        <div>
            <input v-model="store.searchText" style="height: 35px;" class="rounded-2  ps-2" type="text">
            <button @click="emitSearchEvents()"  style="width: 50px; height: 35px;" class="rounded-2 border-0 ms-3">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" setup>
    header{
        gap: 50px;
    }
    input{
        background-color: black;
        border: white 1px solid;
        color: white;
    }
    button{
        font-weight: bold;
        background-color: #F0492F ;
    }
</style>