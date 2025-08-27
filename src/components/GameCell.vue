<script setup lang="ts">
  import { useGameStore } from "@/stores/gameStore.ts";
  import GameCircle from "@/components/GameCircle.vue";
  import GameCross from "@/components/GameCross.vue";

  const props = defineProps<{
    index: number,
  }>()

  const gameStore = useGameStore()

  const handClick = () => {
    gameStore.makeMove(props.index)
  }


</script>

<template>
  <div class="cell" @click="handClick()">
    <div class="content">
      <GameCircle v-if="gameStore.board[index] === '0' "></GameCircle>
      <game-cross v-if="gameStore.board[index] === '1' "></game-cross>
    </div>
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
