import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore('game', () => {
  const board = ref(Array(9).fill(null))
  const currentPlayer = ref<'X' | '0'>('X')
  const winner = ref<string | null>(null)
  const isDraw = ref(false)


  const makeMove = (index: number) => {
    if (board.value[index] || winner.value) return

    board.value[index] = currentPlayer.value

    if (checkWinner()) {
      winner.value = currentPlayer.value
    } else if (board.value.every(cell => cell !== null)){
      isDraw.value = true
    } else {
      currentPlayer.value = currentPlayer.value === 'X' ? '0' : 'X'
    }
  }

  const checkWinner = (): boolean => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    return winPatterns.some(pattern => {
      const [a, b, c] = pattern
      return board.value[a] && board.value[b] && board.value[c]
    })
  }

  const resetGame = () => {
    board.value = Array(9).fill(null)
    currentPlayer.value = 'X'
    winner.value = null
    isDraw.value = false
  }

  const gameStatus = computed(() => {
    if (winner.value) return `Winner: ${winner.value}`
    if (isDraw.value) return 'Draw'
    return `Current player: ${currentPlayer.value}`
  })

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    gameStatus,
    makeMove,
    resetGame

  }

})
