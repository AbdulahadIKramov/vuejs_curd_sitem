<template>
  <div class="btn-group">
   <PrimaryButton 
   v-for="b  in filterButtons"
   :key="b.name"
   class="btn"
   :class="[filterName === b.name ? 'btn-dark' : 'btn-outline-dark']"
   @click="filterHandler(b.name)"
    >
    {{ b.title }}
  </PrimaryButton>

    <!-- <button class="btn btn-dark" type="button" @click="filterHandler('all')">
      Barcha kinolar
    </button>
    <button
      class="btn btn-outline-dark"
      type="button"
      @click="filterHandler('popular')"
    >
      Mashxur kinolar
    </button>
    <button
      class="btn btn-outline-dark"
      type="button"
      @click="filterHandler('mostViewers')"
    >
      Eng ko'p ko'rilgan kinolar
    </button> -->
  </div>
</template>
<script>

export default {
    props: {
        updatedFilterHandler: {
            type: Function,
            required: true,
        },
        filterName: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            filterButtons: [
                {
                    title: "Barcha kinolar",
                    name: "all"
                },
                {
                    title: "Mashxur kinolar",
                    name: "popular"
                },
                {
                    title: "Eng ko'p ko'rilgan kinolar",
                    name: "mostViewers"
                }
            ],
            filter: "all",
        };
    },
    methods: {
        filterHandler(filter) {
            this.filter = filter;
            this.updatedFilterHandler(this.filter);
        },
    },
};
</script>

<style scoped></style>
