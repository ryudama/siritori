<script setup>
import { ref } from 'vue'

const bbb = ref(false)

const aaa= () =>{
  bbb.value = !bbb.value

}

</script>

<template>
  <div>
    <div>aaaファイル</div>
    <div class="bg-danger">非表示コメント</div>
    <div v-show="bbb">bbb</div>
    <button @click="aaa">消失</button>
  </div>
</template>

<style scoped>

</style>
