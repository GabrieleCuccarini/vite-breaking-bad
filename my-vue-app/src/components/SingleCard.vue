<script>
import {store} from '../store.js' 
export default {
  name: "SingleCard",
  props: 
    /**
     * Oggetto che rappresenta un singolo personaggio
     * 
     * @property {number} id
     * @property {string} name
     * @property {string} species
     * @property {string} gender

    */ {
    character: {
      type: Object,
      required: true
    },
  },
  data () {
    return {
        store,
    };
  },
  computed: {
    genderIcon () {
      // di default metto l'icona per il genere unknown
      let toReturn = {
        icon: "fa-genderless",
        color: "grey"
      };
      if (this.character.gender === "Male") {
        toReturn.icon = "fa-mars";
        toReturn.color = "blue";
      } else if (this.character.gender === "Female") {
        toReturn.icon = "fa-venus";
        toReturn.color = "pink";
      }
      return toReturn;
    },
  },
  methods: {
  }
};
</script>

<template>
    
    <div class="card">
        <img :src="character.image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{character.name}} {{ character.id }}</h5>
            <p class="card-text">{{ character.species }}</p>
            <i class="fas" :class="genderIcon.icon" :style="('color:' + genderIcon.color)"></i>
        </div>

    </div>
</template>

<style scoped lang="scss">

.card-body {
    height: 150px;
}
</style>