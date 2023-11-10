const StartGame = ({setGameStarted}) => {
  return (
    <div className="quiz__container">
        <h1 className="quiz__title">Be Smart Quiz</h1>
        <p className="quiz__text">Play and learn in the same time <span>🤯</span> </p>
        <button className="quiz__button" onClick={()=> setGameStarted(true)}>Start Game</button>
    </div>
  )
}

export default StartGame