<template>
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
</template>
<script>
export default {
    props: {
        totalPage: {
            type: Number,
            required: true
        }
    }
}

</script>
<style>
    
</style>