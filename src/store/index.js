import { createStore } from "vuex";

import { players } from "@/store/players.js";
import { game } from "@/store/game.js";


const store = createStore({
    modules: {
        players,
        game
    }
});

export default store;
