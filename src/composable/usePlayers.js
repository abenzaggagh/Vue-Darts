import {computed} from "vue";

export function usePlayers(store) {

    const players = computed(() => store.state.players.all);
    const playersCount = computed(() => store.state.players.all.length);

    const addPlayer = () => {
        const player = {
            id: self.crypto.randomUUID(),
            name: `Player ${playersCount.value + 1}`,
        }

        if (players.value.length < 8) {
            store.dispatch("players/addPlayer", player);
        }
    }

    const deletePlayer = (id) => {
        store.dispatch("players/deletePlayer", id);
    }

    return {
        players, addPlayer, deletePlayer
    }
}
