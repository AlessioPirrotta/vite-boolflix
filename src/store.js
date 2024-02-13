import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    loading: true,
    movieList: [],
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    apiUrlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    serieList:[]
})



// 72dd3b6e4576fcfcd9e977260b1a97d6
// &query=ritorno+al+futuro