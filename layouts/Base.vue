<script lang="js" setup>
    const props = defineProps(["title"])
    
</script>
<template>
    <title>Catálogo - {{ props.title }}</title>
    <div>
        <slot/>
    </div>
</template>
<style src="./Base.css"></style>