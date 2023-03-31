<template>
  <input
    type="text"
    class="form-control search_input"
    placeholder="Kinolarni qidirish..."
    :value="term"
    @input="changeHandler"
  />
</template>

<script>
   export default {
    props: {
      updatedTermHandler: {
        type: Function,
        required: true
      }
    },
    data(){
      return{ term: ''}
    },
    methods: {
      changeHandler(e) {
        this.term = e.target.value
        this.updatedTermHandler(this.term)
      }
    },
   }
</script>

<style scoped>
.search_input {
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 5px;
  box-shadow: 15px 15px 15px #00000015;
  margin-bottom: 1rem;
}
</style>
