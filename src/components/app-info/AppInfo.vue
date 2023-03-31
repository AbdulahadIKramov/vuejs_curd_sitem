<template>
   <div class="app_info">
      <p class="fs-3 text-appercesa">Barcha kinolar soni: {{ allMoviesCount }}</p>
      <p class="fs-4 text-appercesa">Ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</p>
      
   </div>
</template>
<script>
export default {
   props: {
      allMoviesCount: {
         type: Number, 
         required: true,
      },
      favouriteMoviesCount: {
         type: Number,
         required: true
      }
   },

}
</script>
<style>
   .app_info {
      padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 5px;
    box-shadow: 15px 15px 15px #00000015;
   }
</style>