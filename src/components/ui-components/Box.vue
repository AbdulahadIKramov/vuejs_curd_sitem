<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Box"
};
</script>

<style>
.box {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 5px;
  box-shadow: 15px 15px 15px #00000015;
}
</style>
