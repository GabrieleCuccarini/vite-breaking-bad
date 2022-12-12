<script>
import axios from 'axios';
import {store} from '../store.js';

export default {
  created () {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(resp => {
      // console.log(resp.data);
      store.count = resp.data.info.count
      store.allPages = resp.data.info.pages
      // store.image = resp.data.results.image
      store.charactersList = resp.data.results
      console.log(resp.data.results, store.charactersList.name)
   })
  }, methods: {
    // fetchData()
  }
}

</script>

<template>
    <div class="container d-flex align-items-center">
        <select class="form-select form-select-sm">
            <option selected>Select a category</option>
            <option value="1">Name</option>
            <option value="2">Status</option>
            <option value="3">Species</option>
            <option value="4">Gender</option>

        </select>
    </div>

</template>

<style scoped lang="scss">

select {
    width: 200px;
}

h1 {
  color: white;
  padding-left: 1rem;
}
.container-fluid {
  width: 100%;
}

.left-side img {
  width: 60px;
  aspect-ratio: 1 / 1;
}
</style>
