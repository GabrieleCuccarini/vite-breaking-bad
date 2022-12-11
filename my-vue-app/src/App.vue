<template>
  <Header />
  <Select />
  <Main />
</template>

<script>
import Header from './components/Header.vue';
import Select from './components/Select.vue';
import Main from './components/Main.vue';

export default {
  components: { Header, Select, Main },
  data () {
    return {
      // store
    };
  },
}
</script>

<style lang="scss">
@use './components/styles/general.scss'
</style>
