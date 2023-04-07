<template>
  <div class="app">
    <div class="content">
      <AppInfo
        :allMoviesCount="movies.length"
        :favouriteMoviesCount="movies.filter((c) => c.fovourite).length"
      />
      <div class="search_panel">
        <SearchPAnel :updatedTermHandler="updatedTermHandler" />
        <AppFiler
          :updatedFilterHandler="updatedFilterHandler"
          :filterName="filter"
        />
      </div>
      <Box
        class="text-center fs-3 text-danger"
        v-if="!movies.length && !isLoading"
        >Kinolar yo'q
      </Box>
      <Box v-else-if="isLoading" class="text-center">
        <Loading @totalPage="totalPage" />
      </Box>
      <MovieList
        v-else
        :movies="onFilterHandler(onSearchHandler(movies, term), filter)"
        @onToggle="onToggleHandler"
        @onRemove="onRemoveHanler"
      />
      <Box class="d-flex justify-content-center">
        <nav aria-label="pagination">
          <ul class="pagination pagination-lg">
            <li
              class="li"
              v-for="pageNumber in totalPage"
              :key="pageNumber"
              :class="{ active: pageNumber === page }"
              @click="changePageHendler(pageNumber)"
            >
              <span class="page-link">{{ pageNumber }}</span>
            </li>
          </ul>
        </nav>
      </Box>
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
import Paganition from '../paganition/Paganition.vue'
import axios from "axios";

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
      movies: [],
      term: "",
      filter: "all",
      isLoading: false,
      limit: 10,
      page: 1,
      totalPage: 0,
    };
  },
  methods: {
    createMovie(item) {
      this.movies.push(item);
    },
    onToggleHandler({ id, prop }) {
      this.movies = this.movies.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      });
    },
    onRemoveHanler(id) {
      this.movies = this.movies.filter((i) => i.id !== id);
    },
    onSearchHandler(arr, term) {
      if (term.length === 0) {
        return arr;
      }
      return arr.filter((i) => i.name.toLowerCase().indexOf(term) > -1);
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case "popular":
          return arr.filter((i) => i.like);
        case "mostViewers":
          return arr.filter((i) => i.viewers > 400);
        default:
          return arr;
      }
    },
    updatedTermHandler(term) {
      this.term = term;
    },
    updatedFilterHandler(filter) {
      this.filter = filter;
    },
    
    async fetchMovies() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        const newArr = response.data.map((item) => ({
          id: item.id,
          name: item.title,
          like: false,
          fovourite: false,
          viewers: item.id * 10,
        }));
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        console.log(this.totalPage);
        this.movies = newArr;
      } catch (error) {
        alert(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    changePageHendler(page){
      this.page = page
    },
  },
  mounted() {
    this.fetchMovies();
  },
  watch: {
    page(){
      this.fetchMovies()
    }
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
.li {
  cursor: pointer;
}
</style>
