import {  useState} from "react";
import StartGame from "./components/StartGame";
import Quiz from "./components/Quiz";

function App() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <div className="quiz">
      {gameStarted ? ( 
        <Quiz setGameStarted={setGameStarted}/> 
      ) : (
        <StartGame setGameStarted={setGameStarted}/>
      )

    }
    </div>
  )
}

export default App
