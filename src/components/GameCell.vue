<script setup lang="ts">
  import { useGameStore } from "@/stores/gameStore.ts";

  const props = defineProps<{ index: number }>()

  const gameStore = useGameStore()

  const handClick = () => {
    gameStore.makeMove(props.index)
  }

</script>

<template>
  <div class="cell" @click="handClick()">
    <div class="content">{{ gameStore.board[index] }}</div>
  </div>
</template>

<style scoped>
  .cell {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cell:hover {
    background-color: #f0f0f0;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
