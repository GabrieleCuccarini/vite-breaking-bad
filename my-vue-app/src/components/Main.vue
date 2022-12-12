<script>
import {store} from '../store.js' 
import SingleCard from './SingleCard.vue'
import Pagination from "./Pagination.vue";

export default {
  name: "CharactersList",
  components: { SingleCard, Pagination },
  props: {},
  data () {
    return {
      ajaxError: "",
      store,
    };
  }
}
</script>

<template>
  
  <div class="container main overflow-auto">
    <div class="research-bar d-flex align-items-center justify-content-center">
      <Pagination></Pagination>
      Found {{store.count}} characters. You're on page {{store.page}} of {{store.allPages}}
    </div>

    <div class="container minor">
      <div class="row">
        <div class="col-2" v-for="(singleCard, index) in 
        store.charactersList" :key="index">
        <SingleCard :character="singleCard"></SingleCard>
        </div>
      </div>
      <Pagination></Pagination>
    </div>


  </div>

</template>

<style scoped lang="scss">

.col-2 {
    height: 368px;
    margin-bottom: .4rem;
}

.container.main {
  position: relative;
    margin-top: 1rem;
    height: 55vh;
    background-color: white;

    .research-bar {
        height: 50px;
        width: 80%;
        margin: 1rem 0;
        color: white;
        background-color: rgb(33,37,41);
    }
}

h5 {
  margin-bottom: .5rem;
}

p {
  margin: .2rem 0 0 0;
}
</style>
