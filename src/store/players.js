export const players = {
    namespaced: true,
    state: {
        all: [
            {
                id: self.crypto.randomUUID(),
                name: "Player 1",
            }
        ],
        winner: {}
    },
    mutations: {
        SET_PLAYERS(state, players) {
            state.all = players;
        },
        ADD_PLAYER(state, player) {
            state.all.push(player);
        },
        DELETE_PLAYER(state, id) {
            state.all = state.all.filter(player => player.id !== id);
        },
        SET_WINNER(state, winner) {
            state.winner = winner;
        }
    },
    actions: {
        addPlayer(context, player) {
            context.commit('ADD_PLAYER', player);
        },
        deletePlayer(context, id) {
            context.commit('DELETE_PLAYER', id);
        }
    }
}
