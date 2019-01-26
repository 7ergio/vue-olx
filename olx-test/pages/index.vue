<template>
  <main class="main">
    <div class="content">
      <section class="ad-section">
        <div class="row">
          <ad />
        </div>
        <pagination />
      </section>
    </div>
  </main>
</template>

<script>
import Ad from '~/components/Ad'
import Pagination from '~/components/Pagination'

export default {
  components: {
    'ad': Ad,
    'pagination': Pagination
  },
  beforeCreate () {
    this.$store.dispatch('loadPages')
  }
}
</script>

