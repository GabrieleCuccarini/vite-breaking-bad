import axios from 'axios';
import { reactive } from 'vue';

export const store = reactive({
    count: null,
    page: 1,
    image: '',
    allPages: '',
    filter: '',
    charactersList: [],
    fetchError: true,
    // fetchData(){
    //     axios.get('https://rickandmortyapi.com/api/character/', {
    //         params:{
    //             page: store.page,
    //             search: store.filter
    //         }
    //     }).then(resp => {
    //         store.charactersList = resp.data.results;
    //         store.count = resp.data.count;
    //         setTimeout(() => {
    //             store.fetchError = false;
    //         }, 2000);

    //     }).catch(error => {
    //         store.fetchError = true;
    //     });
    // },
});