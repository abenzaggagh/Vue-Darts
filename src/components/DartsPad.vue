<script setup>
import {ref} from "vue";

const firstDart = ref(null);
const secondDart = ref(null);
const thirdDart = ref(null);

const isDouble = ref(false);
const isTriple = ref(false);

const score = (dart) => {
  if (firstDart.value !== null && secondDart.value !== null && thirdDart.value === null) {
    thirdDart.value = dart;
    return;
  }
  if (firstDart.value !== null && secondDart.value === null) {
    secondDart.value = dart;
    return;
  }
  if (firstDart.value === null) {
    firstDart.value = dart;
  }

  isDouble.value = false;
  isTriple.value = false;
}

const double = () => {
  isDouble.value = !isDouble.value;
  isTriple.value = false;
}

const triple = () => {
  isTriple.value = !isTriple.value;
  isDouble.value = false;
}

</script>

<template>
  <div class="container">
    <div class="dart-score">{{ firstDart }}</div>
    <div class="dart-score">{{ secondDart }}</div>
    <div class="dart-score">{{ thirdDart }}</div>
  </div>

  <div class="center">
    <div>
      <button @click="score(1)">1</button>
      <button @click="score(2)">2</button>
      <button @click="score(3)">3</button>
      <button @click="score(4)">4</button>
      <button @click="score(5)">5</button>
    </div>
    <div>
      <button @click="score(6)">6</button>
      <button @click="score(7)">7</button>
      <button @click="score(8)">8</button>
      <button @click="score(9)">9</button>
      <button @click="score(10)">10</button>
    </div>
    <div>
      <button @click="score(11)">11</button>
      <button @click="score(12)">12</button>
      <button @click="score(13)">13</button>
      <button @click="score(14)">14</button>
      <button @click="score(15)">15</button>
    </div>
    <div>
      <button @click="score(16)">16</button>
      <button @click="score(17)">17</button>
      <button @click="score(18)">18</button>
      <button @click="score(19)">19</button>
      <button @click="score(20)">20</button>
    </div>
    <div v-if="!isDouble && !isTriple">
      <button @click="score(25)">Bull</button>
      <button @click="score(50)">Double Bull</button>
    </div>
    <div>
      <button v-bind:class="{'active':isDouble}" @click="double()">Double</button>
      <button v-bind:class="{'active':isTriple}" @click="triple()">Triple</button>
    </div>
  </div>


</template>

<style scoped>
.container {
  display: inline-flex;
  text-align: center;
  justify-content: center;
}

.dart-score {
  margin: 0 10px;
}

.center {
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
  width: 80px;
  padding: 10px;
}
</style>