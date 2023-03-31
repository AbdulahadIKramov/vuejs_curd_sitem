<template>
  <div class="app">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="movies.filter((c) => c.fovourite).length"
      />
      <div class="search_panel">
        <SearchPAnel :updatedTermHandler="updatedTermHandler" />
        <AppFiler :updatedFilterHandler="updatedFilterHandler" :filterName="filter" />
      </div>
      <MovieList
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHanler"
      />
      <MovieAddFrom @createMovie="createMovie" />
    </div>
  </div>
</template>

<!-- Js -->
<script>
import AppInfo from "../app-info/AppInfo.vue";
import SearchPAnel from "../search-apnel/SearchPanel.vue";
import AppFiler from "../app-filter/AppFilter.vue";
import MovieList from "../movie-list/MovieList.vue";
import MovieAddFrom from "../movie-add-from/MovieAddFrom.vue";
export default {
  components: {
    AppInfo,
    SearchPAnel,
    AppFiler,
    MovieList,
    MovieAddFrom,
  },
  data() {
    return {
      movies: [
        {
          name: "Omar",
          viewers: 811,
          fovourite: false,
          like: true,
          id: 1,
        },
        {
          name: "Ertugrul",
          viewers: 711,
          fovourite: false,
          like: false,
          id: 2,
        },
        {
          name: "Empire of Osman",
          viewers: 611,
          fovourite: true,
          like: true,
          id: 3,
        },
      ],
      term : '',
      filter: 'all'
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onToggleHandler({id, prop}) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      });
    },
    onRemoveHanler(id){
      this.movies = this.movies.filter(i => i.id !== id)
    },
    onSearchHandler(arr, term){
      if(term.length === 0 ){
        return arr
      }
      return arr.filter(i => i.name.toLowerCase().indexOf(term) > -1)
    },
    onFilterHandler(arr, filter){
      switch (filter) {
        case "popular": 
          return arr.filter(i => i.like)
        case "mostViewers": 
          return arr.filter(i => i.viewers > 700)
        default:
          return arr
      }
    },
    updatedTermHandler(term) {
      this.term = term
    },
    updatedFilterHandler(filter) {
      this.filter = filter
    },
  }
};
</script>

<!-- CSS -->

<style>
@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@100;200;300;400;500;600;700&display=swap);

* {
  font-family: "Ubuntu", sans-serif;
}

body {
  background-color: rgb(238, 243, 248);

}
.app {
  height: 100vh;
  color: #000;
  
}
.content {
  width: 1000px;
  min-height: 700px;
  background-color: rgb(238, 243, 248);
  margin: 0 auto;
  padding: 5rem 0;
}
.search_panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 5px;
  box-shadow: 15px 15px 15px #00000015;
}
</style>
