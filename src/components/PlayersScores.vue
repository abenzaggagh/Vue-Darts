<script setup>
defineProps({
  players: {
    type: Array,
    required: true,
  },
  currentPlayerIndex: {
    type: Number,
  }
})
</script>

<template>
  <div class="players">
    <div v-for="player of players" :key="player.id">
      <div class="card" v-bind:class="{'selected': player.id === currentPlayerIndex}">
        <div>
          <div class="name">{{ player.name }}</div>
          <div class="score">{{ player.score }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.players {
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: #fff;
  margin: 20px;
  padding: 20px;
}

.name {
  font-weight: 400;
  font-size: 28px;
  color: #2c3e50;
}

.score {
  font-weight: 700;
  font-size: 48px;
  color: #2c3e50;
}

.selected {
  background-color: #6bb52d;
}
</style>
