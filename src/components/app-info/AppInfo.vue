<template>
   <Box class="app_info">
      <p class="fs-3 text-appercesa">Barcha kinolar soni: {{ allMoviesCount }}</p>
      <p class="fs-4 text-appercesa">Ko'rilgan kinolar soni: {{ favouriteMoviesCount }}</p>
      
   </Box>
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
   
</style>