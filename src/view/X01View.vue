<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useGame} from "@/composable/useGame.js";

const store = useStore();

const players = computed(() => store.state.players.all);

useGame(store);

const firstDart = ref(null);
const secondDart = ref(null);
const thirdDart = ref(null);

const isDouble = ref(false);
const isTriple = ref(false);

const score = (dart) => {
  if (firstDart.value !== null && secondDart.value !== null && thirdDart.value === null) {
    thirdDart.value = isTriple.value ? dart * 3 : isDouble.value ? dart * 2 : dart;
    isDouble.value = false;
    isTriple.value = false;

    if (players.value[currentPlayerIndex.value].score - (firstDart.value + secondDart.value + thirdDart.value) === 0) {
      alert("Player : " + players.value[currentPlayerIndex.value].name + " won");
    }

    return;
  }
  if (firstDart.value !== null && secondDart.value === null) {
    secondDart.value = isTriple.value ? dart * 3 : isDouble.value ? dart * 2 : dart;

    if (players.value[currentPlayerIndex.value].score - (firstDart.value + secondDart.value) === 0) {
      alert("Player : " + players.value[currentPlayerIndex.value].name + " won");
    }

    isDouble.value = false;
    isTriple.value = false;
    return;
  }
  if (firstDart.value === null) {
    firstDart.value = isTriple.value ? dart * 3 : isDouble.value ? dart * 2 : dart;

    if (players.value[currentPlayerIndex.value].score - firstDart.value === 0) {
      alert("Player : " + players.value[currentPlayerIndex.value].name + " won");
    }

    isDouble.value = false;
    isTriple.value = false;
  }
}

const double = () => {
  isDouble.value = !isDouble.value;
  isTriple.value = false;
}

const triple = () => {
  isTriple.value = !isTriple.value;
  isDouble.value = false;
}





const currentRound = ref(1);
const currentPlayerIndex = ref(0);

const previousRound = () => {

}

const previous = () => {
  isTriple.value = false;
  isDouble.value = false;

  if (thirdDart.value !== null) {
    thirdDart.value = null;
    return;
  }

  if (secondDart.value !== null) {
    secondDart.value = null;
    return;
  }

  if (firstDart.value !== null) {
    firstDart.value = null;
    return;
  }

  previousRound();
}

const next = () => {

  const sumDarts = firstDart.value + secondDart.value + thirdDart.value;

  if (sumDarts < players.value[currentPlayerIndex.value].score) {
    players.value[currentPlayerIndex.value].score = players.value[currentPlayerIndex.value].score - sumDarts;

    firstDart.value = null;
    secondDart.value = null;
    thirdDart.value = null;
  }

  if (currentPlayerIndex.value === players.value.length - 1) {
    currentPlayerIndex.value = 0;
    currentRound.value = currentRound.value + 1;
  } else if (currentPlayerIndex.value < players.value.length) {
    currentPlayerIndex.value = currentPlayerIndex.value + 1;
  }


}

</script>

<template>
  <div class="players">
    <div v-for="player of players" :key="player.id">
      <div class="card" v-bind:class="{'selected': player.id === currentPlayerIndex}">
        <div class="player" >
          <div class="name">{{ player.name }}</div>
          <div class="score">{{ player.score }}</div>
        </div>
      </div>
    </div>

  </div>

  <div class="players">
    <div class="card">
      <div class="dashboard">
        <div class="round">Round {{ currentRound }} / 15</div>
      </div>
    </div>
  </div>


  <div class="center-grid">
    <div class="container">
      <div class="card dart-score" v-if="firstDart !== null">{{ firstDart }}</div>
      <div class="card dart-score" v-if="secondDart !== null">{{ secondDart }}</div>
      <div class="card dart-score" v-if="thirdDart !== null">{{ thirdDart }}</div>
    </div>

    <div v-if="thirdDart === null">
      <div>
        <button class="button" @click="score(1)">1</button>
        <button class="button" @click="score(2)">2</button>
        <button class="button" @click="score(3)">3</button>
        <button class="button" @click="score(4)">4</button>
        <button class="button" @click="score(5)">5</button>
      </div>
      <div>
        <button class="button" @click="score(6)">6</button>
        <button class="button" @click="score(7)">7</button>
        <button class="button" @click="score(8)">8</button>
        <button class="button" @click="score(9)">9</button>
        <button class="button" @click="score(10)">10</button>
      </div>
      <div>
        <button class="button" @click="score(11)">11</button>
        <button class="button" @click="score(12)">12</button>
        <button class="button" @click="score(13)">13</button>
        <button class="button" @click="score(14)">14</button>
        <button class="button" @click="score(15)">15</button>
      </div>
      <div>
        <button class="button" @click="score(16)">16</button>
        <button class="button" @click="score(17)">17</button>
        <button class="button" @click="score(18)">18</button>
        <button class="button" @click="score(19)">19</button>
        <button class="button" @click="score(20)">20</button>
      </div>
      <div v-if="!isDouble && !isTriple">
        <button class="button" @click="score(25)">Bull</button>
        <button class="button" @click="score(50)">Double Bull</button>
      </div>
      <div>
        <button class="button" v-bind:class="{'active':isDouble}" @click="double()">Double</button>
        <button class="button" v-bind:class="{'active':isTriple}" @click="triple()">Triple</button>
      </div>
    </div>

  </div>

  <div class="center">
    <button class="button" @click="previous()">Previous</button>
    <button class="button" v-if="firstDart !== null && secondDart !== null && thirdDart !== null" @click="next()">Next</button>
  </div>

</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  background: #fff;
  margin: 20px;
  padding: 20px;
}

.players {
  margin: 0 auto;
  display: flex;
  text-align: center;
  justify-content: center;
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

.container {
  display: inline-flex;
  text-align: center;
  justify-content: center;
  margin: 10px auto;
}

.dart-score {
  margin: 0 10px;
  color: #2c3e50;
  font-size: 32px;
  min-width: 80px;
}

.center {
  display: flex;
  text-align: center;
  justify-content: center;
}

.center-grid {
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: 1fr;
}

.active {
  background-color: red;
}

button {
  margin: 6px;
  min-width: 80px;
  padding: 10px;
}

.selected {
  background-color: #6bb52d;
}

.round {
  font-size: 32px;
  color: #2c3e50;
}
</style>
