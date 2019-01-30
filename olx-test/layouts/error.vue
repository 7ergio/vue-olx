<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <h4>
      Please, go back to the
      <nuxt-link to="/">Home page</nuxt-link>
    </h4>
  </div>
</template>

<script>
    export default {
        props: ['error'],
    }
</script>