<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { usePlayer } from '@/stores/pinia.js'

const router = useRouter()
const useMember = usePlayer()

const members = ref(2)
const playerNames = ref([])
const startChecker = ref(false)

watch([() => members.value, () => playerNames.value.length],() => {
    if(playerNames.value.length === members.value){
        startChecker.value = true
    }
})

const startGame = () => {
    if(playerNames.value.every(name => name !== '')){
        useMember.setPlayerName(playerNames.value)
        router.push({ name: 'Top' })
    }else{
        alert('名前が入っていない人がいます')
    }
}

</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <div>ゲームの参加人数を入力してください</div>
            <input type="number" class="mt-3 number" v-model="members" :min="2">
            <div v-if="members" class="mt-3">参加するメンバーの名前を入力してください</div>
            <div v-for="index in members" :key="index">
                <input type="text" v-model="playerNames[index-1]" class="mt-3">
            </div>
            <div class="toGame">
                <button v-show="startChecker" @click="startGame">ゲームスタート！</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal{
    /* 既存のスタイル */
    position: fixed; /* ページに固定 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* 半透明の黒い背景 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 中央揃え */
    justify-content: center; /* 中央揃え */
    z-index: 1000; /* 他の要素より前面に */
}

.modal-content{
    width: 40%;
    height: 90%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow: auto;
}

.number{
    width:80px;
}

.toGame {    
    display: flex;
    justify-content: flex-end;
}

</style>
