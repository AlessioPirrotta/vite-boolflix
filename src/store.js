import { reactive } from 'vue'

export const store = reactive ({
    searchText: "",
    loading: true,
    cardList: [],
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=72dd3b6e4576fcfcd9e977260b1a97d6',
    apiUrlArch: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList:[]
})



// 72dd3b6e4576fcfcd9e977260b1a97d6
// &query=ritorno+al+futuro