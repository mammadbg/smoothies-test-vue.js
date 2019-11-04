<template>
  <div class="buttons">
    <button>
      <router-link to="/">Home</router-link>
    </button>
    <button>
      <router-link to="/fm">Fm</router-link>
    </button>
    <button>
      <router-link to="/methods">methods</router-link>
    </button>
    <button>
      <router-link to="/test">Test</router-link>
    </button>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.buttons {
  padding: 1rem;
  background: rgb(96, 230, 201);
  margin: 2rem 0;
}
button {
  border-radius: 1rem;
  background: rgb(93, 93, 177);
  border: none;
  margin: 0 1rem;
}
a {
  color: #fff !important;
  padding: 1rem;
  font-size: 1rem;
}
</style>