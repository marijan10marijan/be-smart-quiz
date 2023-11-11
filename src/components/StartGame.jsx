const StartGame = ({setGameStarted}) => {
  return (
    <div className="quiz__container">
        <h1 className="quiz__title">Be Smart Quiz</h1>
        <p className="quiz__text">Play and learn at the same time. <span>🤯</span> </p>
        <p style={{color: 'white', fontWeight: '600', marginBlockEnd: '1.5rem', fontSize:'1.2rem', textAlign:'center'}}>This quiz is about general knowledge.</p>
        <button className="quiz__button" onClick={()=> setGameStarted(true)}>Start Game</button>
    </div>
  )
}

export default StartGame