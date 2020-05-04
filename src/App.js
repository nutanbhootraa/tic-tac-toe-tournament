import React from 'react';
import './App.css';
import Tournament from "./Tournament";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: '',
            start: '',
        };
        this.changePlayer1 = this.changePlayer1.bind(this);
        this.changePlayer2 = this.changePlayer2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changePlayer1(event) {
        this.setState({player1: event.target.value,
            player2: this.state.player2,
            start:'',
        });
    }

    changePlayer2(event) {
        this.setState({player1: this.state.player1,
            player2: event.target.value,
            start:'',
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({player1: this.state.player1,
            player2: this.state.player2,
            start:'start',
        });
    }

    render() {
        return (
            <div className="App">

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Player1:
                            <input type="text" value={this.state.player1} onChange={this.changePlayer1}/> <br/>
                        </label>
                        <label>
                            Player2:
                            <input type="text" value={this.state.player2} onChange={this.changePlayer2} /><br/>
                        </label>
                        <input type="submit" value="Start"/>
                    </form>
                </div>
                {((this.state.start) && (this.state.player1) && (this.state.player2)) ? <Tournament player1={this.state.player1} player2={this.state.player2}/> : <div></div>}
            </div>
        );
    }
}

export default App;
