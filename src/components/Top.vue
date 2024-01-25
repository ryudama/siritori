<script setup>
import { ref, watch } from 'vue'
import { usePlayer } from '@/stores/pinia.js'

import Explanation from './Explanation.vue'
import Rule from './Rule.vue'
import Congratulations from './Congratulations.vue'

const useMember= usePlayer()
const members = ref([])
const lostMember = ref('')
const winner = ref('')

const usedWord = ref('')
const usedWordList = ref([])
let currentIndex = ref(0)
let endWord = ref('')

const disqualification = ref(false)

const explanation = ref(false)
const rule = ref(false)
const congratulations = ref(false)


watch([() => members.value.length],() => {
    console.log(members.value)
    console.log(members.value.length)
    if(members.value.length === 1){
        console.log(members.value[0])
        winner.value = members.value[0]
        endGame()
    }
})

const addWord = () => {
    lostMember.value = ''
    usedWord.value = usedWord.value.replace(/[\u30a1-\u30f6]/g, match => String.fromCharCode(match.charCodeAt(0) - 0x60))   //カタカナをひらがなに変換
    if((usedWordList.value.length === 0 && usedWord.value.slice(-1) !== 'ん' && /^[ぁ-んー]$/u.test(usedWord.value.slice(-1)))){    //1人目専用
        loop()
    }else if(endWord.value !== usedWord.value.slice(0,1) ||  //前の文字と次の文字が合ってない
            usedWord.value.slice(-1) === 'ん' || //ん　がついた時
            !/^[ぁ-んー]$/u.test(usedWord.value.slice(-1)) ||    //ひらがなとー以外を言った時
            usedWordList.value.some(word => word === usedWord.value)){    //前に言ったのと同じ言葉を言った時
        usedWord.value = ''
        lostMember.value = members.value[currentIndex.value]
        members.value.splice(currentIndex.value,1)
        currentIndex.value = (currentIndex.value) % members.value.length
        disqualification.value = true
    }else{  //続く時
        loop()
    }
}

const loop = () => {
    usedWordList.value.push(usedWord.value) //使った言葉リストに格納
    if(usedWord.value.slice(-1) === 'ー'){  //ー　がついたら、それを削る
        usedWord.value = usedWord.value.slice(0, -1)
        console.log(endWord.value)
    }
    endWord.value = usedWord.value.slice(-1) //次の言葉の頭として格納
                        .replace(/っ/g, 'つ')   //小さい文字を大きく変更
                        .replace(/ゃ/g, 'や')
                        .replace(/ゅ/g, 'ゆ')
                        .replace(/ょ/g, 'よ')
                        .replace(/ぁ/g, 'あ')
                        .replace(/ぃ/g, 'い')
                        .replace(/ぅ/g, 'う')
                        .replace(/ぇ/g, 'え')
                        .replace(/ぉ/g, 'お')
    usedWord.value = ''
    currentIndex.value = (currentIndex.value + 1) % members.value.length
}

const eraseDisqualification = () => {
    disqualification.value = false
}

const openExplanationModal = () => {
    explanation.value = !explanation.value
}

const openRuleModal = () => {
    rule.value = !rule.value
}

const gaming = async () => {
    members.value = await useMember.getPlayerName()
}

const endGame = () => {
    congratulations.value = true
}

gaming()
</script>

<template>
    <div class="background">
        <div>
            <button class="explain" @click="openExplanationModal">説明</button>
            <button class="rule" @click="openRuleModal">ルール</button>
        </div>
        <div class="modal-content">
            <div v-for="(name, index) in members" :key="index">
                <div>{{ name }}
                    <input type="text" v-if="index === currentIndex" v-model="usedWord" @focus="eraseDisqualification" class="mt-3 ms-3">
                    <button v-if="index === currentIndex" @click="addWord" class="ms-3 me-3">回答</button>
                    <span v-if="index === currentIndex && endWord !== ''">次は「{{ endWord }}」から始まる言葉です</span>
                </div>
            </div>
            <div v-if="disqualification">言ってはいけない言葉を言ったので、{{ lostMember }}は失格です</div>
        </div>
        <Explanation v-if="explanation" @close="explanation = false"/>
        <Rule v-if="rule" @close="rule = false"/>
        <Congratulations v-if="congratulations" :winner="winner"/>
    </div>
</template>

<style scoped>

.background{
    position: fixed; /* ページに固定 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/img/background.jpeg');
    /* opacity: 0.5; */
    display: flex;
    flex-direction: column;
    align-items: center; /* 中央揃え */
    justify-content: center; /* 中央揃え */
    z-index: 1000; /* 他の要素より前面に */
}

.modal-content{
    width: 55%;
    height: 70%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    overflow: auto;
}

.explain{
    position: relative;
    right: 20%;
}

.rule{
    position: relative;
    left: 26%;
}
</style>