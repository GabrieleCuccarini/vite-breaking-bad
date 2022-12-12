<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button class="page-link"
              @click="onPrevClick">Previous</button>
        </li>
        <li class="page-item">
          <a class="page-link active" href="#">
            {{ currentPage }}
          </a>
        </li>
        <li class="page-item">
          <button class="page-link"
              @click="onNextClick">Next</button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
      };
    },
    methods: {
      onPrevClick () {
        this.$emit("pageChange", this.currentPage - 1);
      },
      onNextClick () {
        this.$emit("pageChange", this.currentPage + 1);
      }
    }
  };
  </script>

<style scoped lang="scss">

nav{
  top: 24px;
  right: 24px;
  position: absolute;
}
</style>