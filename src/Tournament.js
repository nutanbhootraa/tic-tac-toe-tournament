import React from "react";
import Game from "./Game";

class Tournament extends React.Component {
    render() {
        return(
            <div>
                <div className="tournament">
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                </div>
                <div className="tournament">
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                </div>
                <div className="tournament">
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                    <Game player1={this.props.player1} player2={this.props.player2}/>
                </div>
                <div>
                    Total games :: 12 <br/>
                    {this.props.player1}::<br/>
                    {this.props.player2}::<br/>
                </div>
            </div>
        );
    }
}

export default Tournament;