<script>
    import {store} from '../store'
    
export default{
    name:'SingleCard',
    props: [
        'propsItem'
    ],
    
}
</script>

<template>
    <div id="card" style="height: 200px;" class="d-flex flex-column pt-3 gap-2 col-2 border">
        <span class="text-light">
        <span style="color: rgba(240, 73, 47, .8);">Titolo:</span>&nbsp; &nbsp;{{ propsItem.title ? propsItem.title : propsItem.name }}</span>
        <span class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo Originale:</span> &nbsp; &nbsp;{{ propsItem.original_title ? propsItem.original_title : propsItem.original_name }}</span>
        <span  class="text-light"><span style="color: rgba(240, 73, 47, .8);">Lingua Originale:</span> &nbsp; &nbsp;<img class="mb-1" :src="`../../src/assets/img/Bandiere/${propsItem.original_language}.webp`" alt=""></span>
        <span class="text-light"><span style="color: rgba(240, 73, 47, .8);">Voto:</span> &nbsp; &nbsp;{{ parseFloat(propsItem.vote_average).toFixed(1) }}</span>
        
    </div>
</template>

<style lang="scss" setup>
   #card{
    flex-basis: calc(16.850% - 20px);
   }
</style>