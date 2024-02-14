<script>
    import {store} from '../store'
    import SingleCard from '../components/SingleCard.vue'
export default{
    name:'MainC',
    components:{
        SingleCard
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <div class="mx-5 my-5">
        <div class="row">
            
            <SingleCard v-for="(item, index) in [...store.movieList, ...store.serieList]" :key="index" :propsItem="item"/>
            
        </div>
    </div>
    </main>
</template>

<style lang="scss" setup>
   .row{
    gap: 20px;
   }
</style>