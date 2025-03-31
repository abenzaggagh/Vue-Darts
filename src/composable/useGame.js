import {onMounted} from "vue";


export function useGame(store) {

    const initGame = () => {
        const players = store.state.players.all;

        const game = store.state.game.game;

        if (["301", "501", "701", "1001"].includes(game.code)) {
            players.forEach((player, index) => {
                player.id = index;
                player.score = parseInt(game.code, 10);
            });
        }
    }

    const next = () => {

    }

    onMounted(() => {
        initGame();
    });

}
