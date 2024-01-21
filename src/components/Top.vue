<script setup>
import { ref } from 'vue'
import { usePlayer } from '@/stores/pinia.js'

import Explanation from './Explanation.vue'
import Rule from './Rule.vue'

const useMember= usePlayer()
const member = ref([])

const usedWord = ref('')
const usedWordList = ref([])
let currentIndex = ref(0)

const explanation = ref(false)
const rule = ref(false)

const addWord = () => {
    console.log(usedWord.value)
    if(usedWord.value === "a"){
        usedWord.value = ''
        member.value.splice(currentIndex-1,1)
        currentIndex.value = (currentIndex.value) % member.value.length
    }else{
        console.log('今の言ったのは' + usedWord.value)
        usedWordList.value.push(usedWord.value)
        usedWord.value = ''
        console.log('今まで言ったリストは' + usedWordList.value)
        currentIndex.value = (currentIndex.value + 1) % member.value.length
        console.log('次は'+member.value[(currentIndex.value) % member.value.length])
    }
}

const openExplanationModal = () => {
    explanation.value = !explanation.value
}

const openRuleModal = () => {
    rule.value = !rule.value
}

const pinia = () => {
    member.value = useMember.getPlayerName()
    console.log("参加者は" + member.value)
    console.log("参加人数" + member.value.length)
}

</script>

<template>
    <div>
        <button @click="openExplanationModal">説明</button>
        <button @click="openRuleModal">ルール</button>
        <button @click="pinia">Pinia確認</button>
        <div v-for="(name, index) in member" :key="index">
            <div>{{ name }}
                <input type="text" v-if="index === currentIndex" v-model="usedWord" class="mt-3 ms-3">
                <button v-if="index === currentIndex" @click="addWord">回答</button>
            </div>
        </div>

        <Explanation v-if="explanation" @close="explanation = false"/>
        <Rule v-if="rule" @close="rule = false"/>
        
    </div>
</template>

<style scoped>

</style>
