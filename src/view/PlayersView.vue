<template>

  <div class="container">
    <div class="players">
      <div v-for="player of players" :key="player.id">
        <input
            type="text"
            class="player-input"
            v-model="player.name"
        />
        <button v-show="players.length > 1" @click="deletePlayer(player.id)">Remove</button>
      </div>
    </div>

    <div>
      <button
          v-if="players.length < 8"
          class="button"
          @click="addPlayer()">
        Add
      </button>
    </div>

    <br>
    <br>
    <br>
    <br>

    <div>
      <a class="button" @click="start()">Start</a>
    </div>
  </div>

</template>

<script setup>

import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import {usePlayers} from "@/composable/usePlayers.js";

const router = useRouter();
const store = useStore();

const { players, addPlayer, deletePlayer } = usePlayers(store);

const start = () => {
  console.log(store.state.players.all);
  // TODO: Check if the names are different
  store.state.players.all.forEach(player => {

  });

 router.push('/x01');
}

</script>



<style scoped>

.container {
  margin: 0 auto;
  text-align: center;
}

.player-input {
  margin: 12px;
  border-radius: 8px;
  padding: 12px;
  border-width: 0;
  width: 250px;
  font-size: 18px;
}

</style>
