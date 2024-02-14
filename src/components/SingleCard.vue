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
    <div id="card" class="d-flex flex-column position-relative gap-2 col-2">
        <img width="100%" :src="`https://image.tmdb.org/t/p/w300/${propsItem.poster_path}`" alt="">
        <div  id="info" class=" px-3 position-absolute">
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo:</span>&nbsp; &nbsp;{{ propsItem.title ? propsItem.title : propsItem.name }}</p>
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo Originale:</span> &nbsp; &nbsp;{{ propsItem.original_title ? propsItem.original_title : propsItem.original_name }}</p>
            <p  class="text-light"><span style="color: rgba(240, 73, 47, .8);">Lingua Originale:</span> &nbsp; &nbsp;<img class="mb-1" :src="`../../src/assets/img/Bandiere/${propsItem.original_language}.webp`" alt=""></p>
            <div class="text-light mb-2" style="color: rgba(240, 73, 47, .8);">
                <span>Voto:&nbsp; &nbsp;</span>
                <span v-for="i in mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                    <i style="color: rgba(240, 73, 47, .8);" class="fas fa-star"></i>
                </span>
                <span v-for="i in 5 - mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                    <i style="color: rgba(240, 73, 47, .8);"  class="far fa-star"></i>
                </span>
            </div>
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo Originale:</span> &nbsp; &nbsp;{{ propsItem.overview}}</p>
        </div>
        
    </div>
</template>

<style lang="scss" setup>
   #card{
    flex-basis: calc(16.85% - 20px);
    padding: 0;
    border: 1px solid rgba(255, 254, 255, .1);
    
   }
   #card:hover{
    overflow-y: scroll;
    
   }

   #card:hover{
    #info{
        display: block;
        
    }
    img{
        opacity: .1;
    }
   }

   #info{
    display: none;
    
    
   }
   /* width */
::-webkit-scrollbar {
  width: 10px;

  
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(240, 73, 47, .8);
  border-radius: 100px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(240, 73, 47, 1);
}
</style>