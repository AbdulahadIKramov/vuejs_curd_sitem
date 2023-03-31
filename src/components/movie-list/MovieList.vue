<template>
  <ul class="movie_list list-group">
    <MovieListItem
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
      @onToggle="$emit('onToggle', $event)"
      @onRemove="$emit('onRemove', $event)"
    />
  </ul>
</template>

<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue";
export default {
  components: {
    MovieListItem,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie_list {
  max-height: 335px;
  overflow: auto;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 5px;
  box-shadow: 15px 15px 15px #00000015;
}
</style>
