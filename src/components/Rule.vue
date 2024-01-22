<script setup>
import { useGameStart } from '@/stores/pinia.js'
const usePinia = useGameStart()

const start = () => {
    usePinia.setRuled()
}

const emit = defineEmits(['close'])

const closeModal = () => {
    emit('close')
}

</script>

<template>
    <div class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
            <div class="title">ルール説明</div>
            <div>①前に言った人の言葉の、一番最後の文字から始まる言葉を言って続けていく（ひらがなとカタカナは区別しない）</div>
            <div>②「カレー」など「ー」で終わったら、その前の文字から始まる言葉を言う</div>
            <div>③「いしゃ」など小さい文字で終わったら、その文字を大きい文字にして始まる言葉を言う（例：「いしゃ」→「やきいも」）</div>
            <div>④「メニュー」など「ー」と小さい文字で終わったら、「ー」の前の文字を大きい文字にして始まる言葉を言う（例：「メニュー」→「ゆき」）</div>
            <br>
            <div>　言ってはいけない言葉を言ってしまった人は脱落し、最後の1人になれば勝利</div>
            <ul><div>⭐️言ってはいけない言葉とは⭐️</div>
                <li>一番最後に「ん」がつく言葉（例：「きりん」）</li>
                <li>一番最後に数字やアルファベット、記号が入っている言葉（例:「ニンテンドーswitch」「プレイステーション5」「わんだふるぷりきゅあ！」など）</li>
                <li>前に言った同じ言葉。また、ひらがなとカタカナで同じものはすでに言ったものとする（例:「りんご」と言った後に「リンゴ」というと負け）</li>
            </ul>
            <div v-if="usePinia.getRuled()">実際にやってみましょう！下のメンバー登録で参加メンバーの登録ができます(このページは後で確認できます)</div>
            <div class="toMember" v-if="usePinia.getRuled()">
                <router-link to="/Member" @click="start">メンバー登録へ▶️</router-link>
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

.title{
    text-align: center;
    font-size: 20px;
    color: red;
}

.toMember {    
    display: flex;
    justify-content: flex-end;
}
</style>
