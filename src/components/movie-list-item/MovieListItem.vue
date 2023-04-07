<template>
  <li
    class="list_item_group d-flex justify-content-between"
    v-bind:class="[{ like: movie.like }, { fovourite: movie.fovourite }]"
  >
    <span
      @click="$emit('onToggle', { id: movie.id, prop: 'like' })"
      class="list_group_item_label"
      >{{ movie.name }}</span
    >

    <input type="text" class="list_group_item_input" :value="movie.viewers" />

    <div class="d-flex justify-content-center align-items-center">
      <button
        type="button"
        class="btn_cookie btn-sm"
        @click="$emit('onToggle', { id: movie.id, prop: 'fovourite' })"
      >
        <i class="fas fa-cookie"></i>
      </button>

      <button class="btn_trash btn-sm" @click="$emit('onRemove', movie.id)">
        <i class="fas fa-trash"></i>
      </button>

      <i class="fas fa-star"></i>
    </div>
  </li>
</template>

<script>

export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    methods: {
        onLike() {
            this.$emit("onLike", this.movie.id);
        },
    },
};
</script>

<style scoped>
.list_item_group {
  padding: 15px 20px;
  border-bottom: 2px solid #8e8c8c34;
  border-radius: 10px;
}

.list_item_group span {
  line-height: 35px;
  font-size: 20px;
  width: 550px;
  cursor: pointer;
}
.list_item_group input {
  line-height: 35px;
  text-align: center;
  font-size: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.list_item_group button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.list_item_group .btn_cookie {
  color: #e09f3e;
}
.list_item_group .btn_trash {
  color: crimson;
}
.list_item_group .fa-star {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 17px;
  color: #ffd700;
  transition: 0.3s all;
  transform: translateX(35px);
  opacity: 0;
}
.list_item_group.like .fa-star {
  opacity: 1;
  transform: translateX(0);
}
.list_item_group.fovourite .list_group_item_label {
  color: #e09f3e;
}

.list_item_group.fovourite .list_group_item_input {
  color: #e09f3e;
}
</style>
