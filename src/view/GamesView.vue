<script setup>
import {ref} from "vue";
import {useStore} from "vuex";
import { useRouter } from "vue-router";

const games = ref([
  {
    title: "301",
    code: "301",
  },
  {
    title: "501",
    code: "501",
  },
  {
    title: "701",
    code: "701",
  },
  {
    title: "Cricket",
    code: "CRICKET",
  },
  {
    title: "Parchisi",
    code: "PARCHISI",
  }
]);

const router = useRouter();
const store = useStore();

const chooseGame = (game) => {
  store.dispatch("game/setGame", game);

  router.push('/players');
}


</script>

<template>
  <div class="grid">
    <button v-for="game in games" class="button" @click="chooseGame(game)">{{ game.title }}</button>
  </div>
</template>

<style scoped>

</style>
