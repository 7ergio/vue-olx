<template>
  <div class="col-md-6 col-lg-4" v-for="pageItem in pages">
    <div class="ad-item">
      <h2 class="ad-item__title">iphone 5s 16gb silver bialy stan dbd Pl dystrybucja 100% sprawny</h2>
      <!--<h2 class="ad-item__title">{{pageItem[pageNumber].ads.title}}</h2>-->
      <h6 class="ad-item__info">Dodano: <span>10 lut</span></h6>
      <h6 class="ad-item__info">Marka: <span>Iphone</span> | Stan: <span>Używane</span></h6>
      <p>Sprzedam Iphone 5s w bdb stanie technicznym i wizualnym (jak na foto) telefon jest w 100 % sprawny wszystko dziala nie zawiesza sie i nie gubi sieci. Wizualnie jak na zdjeciach posiada normalne slady urzytkowania,\nPl dystrybucja telefon fabrycznie bez blokady simlock. \nTelefon sprzedaje w kmpl \nW sklad zestawu wchodzi telefon ladowarka (ori) kabel sluchawki i opakowanie zgodne z imei</p>
    </div>
  </div>
</template>

<script>

    export default {
        computed: {
          pages() {
              return this.$store.getters.pages
          }
        }
    }
</script>