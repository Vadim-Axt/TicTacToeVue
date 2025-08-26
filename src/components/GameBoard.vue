<script setup lang="ts">

import GameCell from "@/components/GameCell.vue";
import { useGameStore } from "@/stores/gameStore.ts";

const gameStore = useGameStore()
</script>

<template>

  <div class="game-container">
    <div class="status">{{ gameStore.gameStatus }}</div>

    <div class="board">
      <GameCell v-for="index in 9" :index="index - 1" :key="index"/>
    </div>

    <button class="reset-btn" @click="gameStore.resetGame()">New Game</button>
  </div>

</template>

<style scoped>
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background: black;
    gap: 5px;
    width: 900px;
    height: 900px;
  }
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  .status {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  .reset-btn {
    padding: 10px 20px;
    font-size: 1rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .reset-btn:hover {
    background: #0056b3;
  }


</style>

