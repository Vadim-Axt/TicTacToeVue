<script setup lang="ts">

import GameBoard from "@/components/GameBoard.vue";

import { useGameStore } from "@/stores/gameStore.ts";

const gameStore = useGameStore()

gameStore.checkWinner()

</script>

<template>

  <header>Tic Tac Toe</header>

  <main>

    <GameBoard/>

  </main>

</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

header {
  margin-bottom: 30px;
  text-align: center;
}

h1 {
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
