import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive ({
    searchText: "",
    loading: true,
    movieList: [],
    idList:[],
    keyList:[],
    key:[],
    movieID: "",
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    apiUrlTrailer: 'https://api.themoviedb.org/3/movie/165/videos?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    apiUrlCast: 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    serieList:[],
    castList:[],
    actorList:[],
    

   
})





// 72dd3b6e4576fcfcd9e977260b1a97d6
// &query=ritorno+al+futuro