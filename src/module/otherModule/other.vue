<template>
    <div ref="other">
        other
    </div>
</template>

<script setup lang="ts">
const other = ref('other')
onMounted(()=>{
    console.log(`onMounted: ${other}`);
})
</script>

<style scoped></style>