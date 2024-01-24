<script setup>
import { useGameStart } from '@/stores/pinia.js'
const usePinia = useGameStart()

const start = () => {
    usePinia.setExplaned()
}

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

</script>

<template>
    <div class="modal" @click="closeModal">
        <div class="close">
            <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-content" @click.stop>
            <div class="title">しりとりとは</div>
            <div>　何の道具もいらず手軽にできる遊びのひとつとして、「しりとり」があります。<br>
            「しりとり」をとおして、聞いたことのない、もしくは普段使わない言葉に触れることで、今まで知らなかった物の名前や言葉を知り語彙を増やすきっかけになります。
            しかしながら、しりとり遊びで養われる力は、語彙力だけではないのです。<br><br>

            　しりとりがスラスラ出来るためには、たくさんの言葉を知っていることが必要です。
            しかし、たとえ知っている言葉でも、しりとりをしていて必ずしもその言葉が思つくとは限らないですよね？<br>

            　「しりとり」が上手にできるためには、語彙が豊富であることと同時に、”ある条件からいろいろなことを思いつく力”が必要になります。

            ある条件からたくさんの言葉を思いつくには、言葉をたくさん知っているだけダメで、頭の中にある条件に合うことばをたくさん思い浮かべる力が必要になるのです。

            例えば「”あ”で始まることばは何！？」のように、１つの事柄（条件・情報）からいろいろなことを思いつく力を「拡散的思考力」と言います。<br><br>

            　しりとり遊びはこの「拡散的思考力」を高めるトレーニングになります。<span v-if="usePinia.getExplaned()">実際にやってみましょう！次のページでは、ルールを説明します(このページは後で確認できます)</span>
            </div>
            <div class="toRule" v-if="usePinia.getExplaned()">
                <router-link to="/Rule" @click="start">ルール説明へ▶️</router-link>
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
    width: 50%;
    height: 70%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow: auto;
}

.title{
    text-align: center;
    font-size: 20px;
    color: red;
}

.toRule{
    display: flex;
    justify-content: flex-end;
}

.close{
    position: relative;
    left: 26%;
}
</style>
