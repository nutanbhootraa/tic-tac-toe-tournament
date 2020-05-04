import React from "react";
import Board from "./Board";

class Game extends React.Component {
    render() {
        return (
        <div>
            <div className="game-board">
                <Board player1={this.props.player1} player2={this.props.player2}/>
            </div>
        </div>
        );
    }
}

export default Game;