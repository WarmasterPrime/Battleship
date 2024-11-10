import { GAME_BOARD_DIM, FIRST_PLAYER, SECOND_PLAYER } from "../consts.mjs";
import { print } from "../utils/io.mjs";



const creteBatleshipScreen = (firstPlayerBoard, secondPlayerBoard) => {

    let currentPlayer = FIRST_PLAYER;
    //let firstPlayerBoard = null;
    //let secondPlayerBoard = null;
    let currentPlayerShipMap;


    function swapPlayer() {
        currentPlayer *= -1;
        if (currentPlayer == FIRST_PLAYER) {
            currentBoard = firstPlayerBoard;
            oponentBoard = secondPlayerBoard;
            currentPlayherShipMap = firstPlayerBoard;
        } else {
            currentBoard = secondPlayerBoard;
            oponentBoard = firstPlayerBoard;
            currentPlayherShipMap = secondPlayerBoard;
        }
    }

    return {
        isDrawn: false,
        next: null,
        transitionTo: null,


        init: function (firstPBoard, secondPBoard) {
            firstPlayerBoard = firstPBoard;
            secondPlayerBoard = secondPBoard;
            currentPlayerShipMap = firstPlayerBoard;
        },

        update: function (dt) {
            //this.isDrawn = false;
        },

        draw: function (dr) {
            if (this.isDrawn == false) {
                this.isDrawn = true;
                
                print("There should be a battleship game here\n\n\n\n");
                
                print(currentPlayerShipMap);
                
            }
        }

    }
}

export default creteBatleshipScreen;