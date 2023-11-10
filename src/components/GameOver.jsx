

const GameOver = ({score, setScore, questions, setCurrentQuestion, setGameStarted}) => {

    const handlePlayAgain = ()=>{
        setScore(0)
        setCurrentQuestion(0)
        setGameStarted(false)
    }

  return (
    <div  className="quiz__container">
        <h2 className="quiz__title">Game Over</h2>
        <p className="quiz__text">I hope you are enjoy playing this quiz. 👍</p>
        <p className="score">Your score is: {score} / {questions.length }</p>
        <button className="quiz__button" onClick={handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default GameOver