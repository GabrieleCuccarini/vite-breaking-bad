<script>
export default {
     data() {
       return {
            
     }
  }
}
</script>

<template>
    <div class="container d-flex align-items-center">
        <select class="form-select form-select-sm">
            <option selected>Select a category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
