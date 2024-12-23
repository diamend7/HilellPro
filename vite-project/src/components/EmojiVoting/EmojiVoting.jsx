import { useState, useEffect } from "react";

const EmojiVoting = () => {
  const initialVotes = JSON.parse(localStorage.getItem("votes")) || {
    smile1: 0,
    smile2: 0,
    smile3: 0,
    smile4: 0,
    smile5: 0,
  };

  const [votes, setVotes] = useState(initialVotes);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: prevVotes[emoji] + 1,
    }));
  };

  const showResults = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winners = Object.keys(votes).filter((key) => votes[key] === maxVotes);

    setWinner(winners.length === 1 ? winners[0] : "no winner");
  };

  const clearResults = () => {
    localStorage.removeItem("votes");
    setVotes({
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
      smile5: 0,
    });
    setWinner(null);
  };

  return (
    <>
      <h1>Голосування за найкращий смайлик</h1>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {Object.keys(votes).map((emoji) => (
          <div key={emoji}>
            <span
              onClick={() => handleVote(emoji)}
              style={{ cursor: "pointer" }}
            >
              {emoji}
            </span>
            <p> {votes[emoji]}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={showResults} style={{ margin: "10px" }}>
          Результати
        </button>
        <button onClick={clearResults} style={{ margin: "10px" }}>
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
};

export default EmojiVoting;
