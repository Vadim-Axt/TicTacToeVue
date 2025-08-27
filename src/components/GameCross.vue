<script setup lang="ts">

</script>

<template>
  <div class="cross"></div>
</template>

<style scoped>
.cross {
  position: relative;
  width: 90%;
  height: 90%;
}

.cross::before,
.cross::after {
  content: '';
  position: absolute;
  background-color: #000;
  top: 50%;
  left: 50%;
}

.cross::before {
  width: 100%;
  height: 4px;
  transform: translate(-50%, -50%) rotate(45deg);
}

.cross::after {
  width: 4px;
  height: 100%;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
