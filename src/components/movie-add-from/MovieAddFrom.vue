<template>
  <Box class="movie_add_form">
    <h3>Yangi kino qoshish</h3>
    <form class="add_form d-flex" @submit.prevent>
      <input
        type="text"
        class="form-control new_movie_label"
        placeholder="Qanday kino?"
        :value="name"
        @input="name = $event.target.value"
      />
      <input
        type="number"
        class="form-control new_movie_label"
        placeholder="Necha marotaba korilgan"
        :value="viewers"
        @input="viewers = $event.target.value"

      />
      <PrimaryButton class=" btn-outline-dark" @click="addMovies">Qo'shish</PrimaryButton>
    </form>
  </Box>
</template>


<script>
export default {
    data() {
        return {
            name: "",
            viewers: ""
        };
    },
    methods: {
        changeHandlerName(e) {
            console.log(e.target.value);
        }
    },
    methods: {
        addMovies() {
            if (!this.name || !this.viewers)
                return;
            const newMovies = {
                name: this.name,
                viewers: this.viewers,
                favourite: false,
                like: false,
                id: Date.now()
            };
            this.$emit("createMovie", newMovies);
            this.name = "";
            this.viewers = "";
        }
    },
};
</script>


<style scoped>

</style>
