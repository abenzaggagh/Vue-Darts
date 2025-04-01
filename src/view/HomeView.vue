<script setup>

</script>

<template>
    
    <div class="container">
        <div>
            <h1>Darts Vue</h1>
        </div>
        <div class="play">
            <RouterLink class="button" to="/games">Play</RouterLink>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

.play {
    margin: 25px 0;
}
</style>