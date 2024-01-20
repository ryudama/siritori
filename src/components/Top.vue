<script setup>
import { ref } from 'vue'

import Explanation from './Explanation.vue'
import Rule from './Rule.vue'

const explanation = ref(false)
const rule = ref(false)

const openExplanationModal = () => {
    explanation.value = !explanation.value
}

const openRuleModal = () => {
    rule.value = !rule.value
}

</script>

<template>
    <div>
        <button @click="openExplanationModal">説明</button>
        <button @click="openRuleModal">ルール</button>
        <div>Top</div>

        <Explanation v-if="explanation" @close="explanation = false"/>
        <Rule v-if="rule" @close="rule = false"/>
        
    </div>
</template>

<style scoped>

</style>
