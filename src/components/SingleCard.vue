<script>
    import {store} from '../store'
    
    export default {
        name: 'SingleCard',
        props: ['propsItem'],
        methods: {
            mapToFive(number) {
                return Math.ceil(number / 2);
            }
        }
    }
</script>

<template>
    <div id="card" class="d-flex flex-column pt-3 gap-2 col-2 border">
        <img :src="`https://image.tmdb.org/t/p/w780/${propsItem.poster_path}`" alt="">
        <span class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo:</span>&nbsp; &nbsp;{{ propsItem.title ? propsItem.title : propsItem.name }}</span>
        <span class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo Originale:</span> &nbsp; &nbsp;{{ propsItem.original_title ? propsItem.original_title : propsItem.original_name }}</span>
        <span  class="text-light"><span style="color: rgba(240, 73, 47, .8);">Lingua Originale:</span> &nbsp; &nbsp;<img class="mb-1" :src="`../../src/assets/img/Bandiere/${propsItem.original_language}.webp`" alt=""></span>
        <div class="text-light mb-2" style="color: rgba(240, 73, 47, .8);">
            <span>Voto:&nbsp; &nbsp;</span>
            <span v-for="i in mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                <i style="color: rgba(240, 73, 47, .8);" class="fas fa-star"></i>
            </span>
            <span v-for="i in 5 - mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                <i style="color: rgba(240, 73, 47, .8);"  class="far fa-star"></i>
            </span>
        </div>
        
    </div>
</template>

<style lang="scss" setup>
   #card{
    flex-basis: calc(20.22% - 20px);
   }
</style>