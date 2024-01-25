<script setup>
import { useGameStart } from '@/stores/pinia.js'
const usePinia = useGameStart()

const props = defineProps({
    winner:String
})
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <div>🏆優勝おめでとう！🥇</div>
            <div class="mt-5">{{ winner }}　が優勝です！</div>
        <div class="mt-5"><router-link to="/Member">もう一度遊ぶ</router-link></div>
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
    height: 70%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow: auto;
    font-size: 30px;
    text-align: center;
}

</style>