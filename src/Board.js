import React from "react";
import Square from "./Square";

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            bgColor: Array(9).fill(null),
            xIsNext:true,
            winner:'',
        }
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            bgColor={this.state.bgColor[i]}/>;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        const bgColor = this.state.bgColor.slice();

        if (this.calculateWinner(this.state.squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        bgColor[i] = this.state.xIsNext ? '#aaaaaa' : 'yellow';
        this.setState({
                squares: squares,
                bgColor: bgColor,
                xIsNext: !this.state.xIsNext,
                winner: (this.state.xIsNext ? this.props.player1 : this.props.player2),
            });
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'winner is ' + this.state.winner;
        }
        else {
            status = 'Next Player :: ' + (this.state.xIsNext ? this.props.player1 : this.props.player2);
        }
        return(
            <div>
                <div> {status} </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}

export default Board;