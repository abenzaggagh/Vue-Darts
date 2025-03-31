export const game = {
    namespaced: true,
    state: {
        game: ''
    },
    mutations: {
        SET_GAME: (state, game) => {
            state.game = game;
        }
    },
    actions: {
        setGame(context, game) {
            context.commit('SET_GAME', game);
        }
    }
}
