import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGameStart = defineStore('gameStart', () => {
    const isExplaned = ref(true)
    const isRuled = ref(true)

    return {
        getExplaned: () => isExplaned.value,
        setExplaned: () => {
            isExplaned.value = false
        },
        getRuled: () => isRuled.value,
        setRuled: () => {
            isRuled.value = false
        }
    }
})

export const usePlayer = defineStore('player', () => {
    const playerName = ref([])

    return {
        getPlayerName: () => playerName.value,
        setPlayerName: (name) => {
            playerName.value = name
        },
    }
})

export default useGameStart