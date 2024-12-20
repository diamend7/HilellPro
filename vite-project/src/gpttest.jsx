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

  // Обробник голосування
  handleVote = (emoji) => {
    this.setState(
      (prevState) => ({
        votes: {
          ...prevState.votes,
          [emoji]: prevState.votes[emoji] + 1,
        },
      }),
      () => localStorage.setItem("votes", JSON.stringify(this.state.votes))
    );
  };

  // Показ результатів
  showResults = () => {
    const { votes } = this.state;
    const winner = Object.keys(votes).reduce((a, b) =>
      votes[a] > votes[b] ? a : b
    );
    this.setState({ winner });
  };

  // Очищення результатів
  clearResults = () => {
    localStorage.removeItem("votes");
    this.setState({
      votes: { smile1: 0, smile2: 0, smile3: 0, smile4: 0, smile5: 0 },
      winner: null,
    });
  };

  render() {
    const { votes, winner } = this.state;

    return (
      <div>
        <h1>Голосування за найкращий смайлик</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {Object.keys(votes).map((emoji, index) => (
            <div key={index}>
              <div
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                onClick={() => this.handleVote(emoji)}
              >
                {emoji === "smile1"
                  ? "😀"
                  : emoji === "smile2"
                  ? "😊"
                  : emoji === "smile3"
                  ? "😎"
                  : emoji === "smile4"
                  ? "🤩"
                  : "😍"}
              </div>
              <p style={{ textAlign: "center" }}>{votes[emoji]}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button onClick={this.showResults}>Show Results</button>
          <button onClick={this.clearResults} style={{ marginLeft: "10px" }}>
            Очистити результати
          </button>
        </div>
        {winner && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h2>Результати голосування:</h2>
            <p>Переможець:</p>
            <div style={{ fontSize: "50px" }}>
              {winner === "smile1"
                ? "😀"
                : winner === "smile2"
                ? "😊"
                : winner === "smile3"
                ? "😎"
                : winner === "smile4"
                ? "🤩"
                : "😍"}
            </div>
            <p>Кількість голосів: {votes[winner]}</p>
          </div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
