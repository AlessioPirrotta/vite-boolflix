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
    methods: {
         getMovie(){
             store.apiUrlMovie= 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6'
             if(store.searchText){
                 store.apiUrlMovie += `&query=${store.searchText}`
             }
             axios
             .get(store.apiUrlMovie)
             .then(res=>{
                 console.log(res.data.results)
                 store.movieList = res.data.results
             })
         },
        getSerie(){
            store.apiUrlSeries= 'https://api.themoviedb.org/3/search/tv?api_key=72dd3b6e4576fcfcd9e977260b1a97d6'
            if(store.searchText){
                store.apiUrlSeries += `&query=${store.searchText}`
            }
            axios
            .get(store.apiUrlSeries)
            .then(res=>{
                console.log(res.data.results)
                store.serieList = res.data.results
            })
        }
        

    },
   
}
</script>

<template>
    <HeaderC @movieSearch="getMovie" @serieSearch="getSerie"/>
    <MainC/>
</template>

<style lang="scss">
@use './styles/style.scss' as *;
</style>