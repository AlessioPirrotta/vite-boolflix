<script>
    import {store} from '../store'
    import axios from 'axios'
    
    export default {
        name: 'SingleCard',
        data() {
            return {
                store,
                trailerString:""
            }
        },
       mounted() {
        this.trailerString=""
        this.getTrailer(this.propsItem.id, this.propsItem.movie_type)
        
        },
        props: ['propsItem',
                'propsIndex'
        ],
        watch: {
  'store.movieList': {
    handler(newValue, oldValue) {
      console.log('Movie list length changed. New length:', newValue.length);
      this.trailerString=""
        this.getTrailer(this.propsItem.id, this.propsItem.movie_type)
    },
    immediate: true,
    deep: true 
  }
},

        methods: {
            mapToFive(number) {
                return Math.ceil(number / 2);
            },
            getTrailer(id, mediaType) {
                console.log("trailer",this.trailerString)
                if (mediaType !== "tv") {
                    mediaType = "movie"
            }
            
            axios
                .get(`https://api.themoviedb.org/3//${mediaType}/${id}/videos?api_key=72dd3b6e4576fcfcd9e977260b1a97d6&language=en-US`)
                .then(res => {
                    console.log(res.data.results)
                    let foundKey= 0
                    res.data.results.forEach(res => {
                        if ((res.name === "Official Trailer") || (res.type === "Trailer" && res.official && res.site === "YouTube") ) {
                            foundKey= res.key
                            console.log("questo", foundKey)
                            return
                        }
                     
                    })
                    if(!foundKey){
                            foundKey= res.data.results[0].key
                        }
                    this.trailerString=`https://www.youtube.com/embed/${foundKey}?autoplay=1`
                    
                })

    },
        }
    }
</script>

<template>
    <div  v-if="propsItem.poster_path && propsItem.poster_path !== 'https://image.tmdb.org/t/p/w300/null'" id="card" class="d-flex flex-column position-relative gap-2 col-2">
        <img id="poster" width="100%" :src="`https://image.tmdb.org/t/p/w300/${propsItem.poster_path}`" alt="">
        <div  id="info" class=" px-3 position-absolute">
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo:</span>&nbsp; &nbsp;{{ propsItem.title ? propsItem.title : propsItem.name }}</p>
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Titolo Originale:</span> &nbsp; &nbsp;{{ propsItem.original_title ? propsItem.original_title : propsItem.original_name }}</p>
            <p  class="text-light"><span style="color: rgba(240, 73, 47, .8);">Lingua Originale:</span> &nbsp; &nbsp;<img class="mb-1" :src="`../../src/assets/img/Bandiere/${propsItem.original_language}.webp`" alt=""></p>
            <span style="color:rgba(240, 73, 47, .8) ;">Actors: </span>
            <span style="color: white;" v-if="store.castList[propsIndex] && store.castList[propsIndex].length > 6" v-for="(actor, index) in store.castList[propsIndex].slice(0, 6)" :key="index">
                {{ index !== 5 ? actor.name + ',' + ' ' : actor.name }}
            </span>
            <span style="color: white" v-else-if="store.castList[propsIndex]" v-for="(actor, index) in store.castList[propsIndex]" >
                {{ index !== store.castList[propsIndex].length - 1 ? actor.name + ',' + ' ' : actor.name }}
            </span>
            <div class="text-light my-3" style="color: rgba(240, 73, 47, .8);">
                <span style="color:rgba(240, 73, 47, .8) ;">Voto:&nbsp; &nbsp;</span>
                <span v-for="i in mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                    <i style="color: rgba(240, 73, 47, .8);" class="fas fa-star"></i>
                </span>
                <span v-for="i in 5 - mapToFive(parseFloat(propsItem.vote_average))" :key="i">
                    <i   class="far fa-star"></i>
                </span>
            </div>
            <p class="text-light"><span style="color: rgba(240, 73, 47, .8);">Details:</span> &nbsp; &nbsp;{{ propsItem.overview}}</p>
            <iframe width="90%" :src="trailerString" allowfullscreen></iframe> 
            
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
    #poster{
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