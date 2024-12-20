import React, { Component } from "react";

class EmojiVoting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: JSON.parse(localStorage.getItem("votes")) || {
        smile1: 0,
        smile2: 0,
        smile3: 0,
        smile4: 0,
        smile5: 0,
      },
      winner: null,
    };
  }

  handleVote = (emoji) => {
    this.setState((prevState) => {
      const updatedVotes = {
        ...prevState.votes,
        [emoji]: prevState.votes[emoji] + 1,
      };
      localStorage.setItem("votes", JSON.stringify(updatedVotes));
      return { votes: updatedVotes };
    });
  };

  showResults = () => {
    const { votes } = this.state;
    const maxVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter((key) => votes[key] === maxVotes);

    const winner = winners.length === 1 ? winners[0] : "no winner";
    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.removeItem("votes");
    this.setState({
      votes: {
        smile1: 0,
        smile2: 0,
        smile3: 0,
        smile4: 0,
        smile5: 0,
      },
      winner: null,
    });
  };

  render() {
    const { votes, winner } = this.state;

    return (
      <>
        <h1>Голосування за найкращий смайлик</h1>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {Object.keys(votes).map((emoji) => (
            <div key={emoji}>
              <span
                onClick={() => this.handleVote(emoji)}
                style={{ cursor: "pointer" }}
              >
                {emoji}
              </span>
              <p> {votes[emoji]}</p>
            </div>
          ))}
        </div>

        <div>
          <button onClick={this.showResults} style={{ margin: "10px" }}>
            Результати
          </button>
          <button onClick={this.clearResults} style={{ margin: "10px" }}>
            Очистити результати
          </button>
          {winner && (
            <div>
              <h2>Переможець:</h2>
              <span>{winner}</span>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default EmojiVoting;
