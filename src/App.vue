<script>
import {store} from './store'
import HeaderC from './components/HeaderC.vue'
import MainC from './components/MainC.vue'
import axios from 'axios'
export default{
    components:{
        HeaderC,
        MainC
    },
    data() {
        return {
            store
        }
    },
    mounted() {
    //    this.getCast()
    },
    methods: {
    getMovie() {
        store.apiUrlMovie = 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6';
        if (store.searchText) {
            store.apiUrlMovie += `&query=${store.searchText}`;
        }
        axios
            .get(store.apiUrlMovie)
            .then(res => {
                const movieIDs = res.data.results.map(movie => movie.id);
                store.movieID = movieIDs;
                console.log(store.movieID);
                store.movieList = res.data.results;
                store.movieList.forEach((el)=>{
                    el.movie_type= "movie"
                })
                this.getCast()
            })
            .catch(error => {
                console.error('Errore durante la richiesta:', error);
            });
            console.log("id", store.movieID)
    },
    getSerie() {
        store.apiUrlSeries = 'https://api.themoviedb.org/3/search/tv?api_key=72dd3b6e4576fcfcd9e977260b1a97d6';
        if (store.searchText) {
            store.apiUrlSeries += `&query=${store.searchText}`;
        }
        axios
            .get(store.apiUrlSeries)
            .then(res => {
                const serieIDs = res.data.results.map(serie => serie.id);
                store.idList = serieIDs;
                console.log("id list", store.idList);
                store.serieList = res.data.results;
                console.log("ciao",res.data.results)
                store.serieList.forEach((el)=>{
                    el.movie_type= "tv"
                })
                console.log(store.serieList)
            })
            .catch(error => {
                console.error('Errore durante la richiesta:', error);
            });
    },
  getCast() {
    store.castList= []
    store.movieList.forEach( element => {
        axios
            .get(`https://api.themoviedb.org/3/${element.movie_type}/${element.id}/credits?api_key=72dd3b6e4576fcfcd9e977260b1a97d6`)
            .then(res => {
                store.castList.push(res.data.cast) 
            })
            .catch(error => {
                console.error("Errore durante il recupero del cast:", error);
            });
            console.log("cast", store.castList);
        });

        store.serieList.forEach( element => {
        axios
            .get(`https://api.themoviedb.org/3/${element.movie_type}/${element.id}/credits?api_key=72dd3b6e4576fcfcd9e977260b1a97d6`)
            .then(res => {
                store.castList.push(res.data.cast) 
            })
            .catch(error => {
                console.error("Errore durante il recupero del cast:", error);
            });
            console.log("cast", store.castList);
        });
    }
 
    
    
}}



</script>

<template>
    <HeaderC @movieSearch="getMovie" @serieSearch="getSerie" @trailerSearch="getTrailer"  @actorSearch="getActor" />
    <MainC/>
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>