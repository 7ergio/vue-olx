<template>
  <main class="main">
    <div class="content">
      <section class="ad-section">
        <div class="row">
          <!--<ad />-->
          <div class="col-md-6 col-lg-4" v-for="ad in ads">
            <div class="ad-item">
              <h2 class="ad-item__title">{{ad.title}}</h2>
              <h6 class="ad-item__info">Dodano: {{ad.created}}</h6>
              <h6 class="ad-item__info" v-for="(key, value) in ad.params">
                <span>{{key, value}}</span>
              </h6>
              <p>{{ad.description}}</p>
            </div>
          </div>
        </div>
        <!--<pagination />-->
        <div class="pagination">
          <nuxt-link
              :to="$route.path + '?page=' + (+currentPage - 1)"
              :class="{'pagination__button--visible': currentPage > 1}"
              class="pagination__button pagination__button--text"
          >Previous</nuxt-link>
          <nuxt-link
              :to="$route.path + '?page=' + (+currentPage - 1)"
              :class="{'pagination__button--disabled': currentPage == 1}"
              class="pagination__button"
          >1</nuxt-link>
          <nuxt-link
              :to="$route.path + '?page=' + (+currentPage + 1)"
              :class="{'pagination__button--disabled': currentPage == totalPages}"
              class="pagination__button"
          >2</nuxt-link>
          <nuxt-link
              :to="$route.path + '?page=' + (+currentPage + 1)"
              :class="{'pagination__button--visible': currentPage < totalPages}"
              class="pagination__button pagination__button--text"
          >Next</nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
//import Ad from '~/components/Ad'
//import Pagination from '~/components/Pagination'

export default {
  components: {
//    'ad': Ad,
//    'pagination': Pagination
  },
  beforeCreate () {
    this.$store.dispatch('loadPages', (typeof this.$route.query.page != 'undefined') ? this.$route.query.page : 1)
  },
  computed: {
      pages() {
          return this.$store.getters.pages
      },
      ads() {
          return this.$store.getters.ads
      },
      totalPages() {
          return this.$store.getters.totalPages
      },
      currentPage() {
          return (typeof this.$route.query.page != 'undefined') ? this.$route.query.page : 1
      }
  },
  watch: {
      currentPage: function () {
          this.$store.dispatch('loadPages', (typeof this.$route.query.page != 'undefined') ? this.$route.query.page : this.currentPage)
      }
  }
}
</script>

