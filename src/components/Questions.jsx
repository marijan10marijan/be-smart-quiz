import DOMPurify from "dompurify"
import Question from "./Question"
import React, { useState } from "react"
import GameOver from "./GameOver"

const Questions = ({questions, setGameStarted}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [score, setScore] = useState(0)

    const nextQuestion = ()=>{
        setCurrentQuestion(prev => prev + 1)
        setIsBtnDisabled(true)
    }

  return (
    <>
    {currentQuestion !== questions.length  ? (
    <div className="quiz__card">
        <p className="show-current__question">Question: <span>{currentQuestion + 1}/</span>  {questions.length}</p>
        {questions?.map((question, index) => (
            <React.Fragment key={index}>
                {currentQuestion === index ? (
                    <div key={index} >
                        <h2 className="question__title" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(question.question)}}></h2>
                        <div className="quiz__answers">
                            {question.answers.map((answer, index) => (
                                <Question 
                                    key={index} 
                                    answer={answer} 
                                    setIsBtnDisabled={setIsBtnDisabled}
                                    setScore={setScore}
                                    correctAnswer={question.correct_answer}
                                />
                            ))}
                        </div>
                        <button className={isBtnDisabled ? 'quiz__button disabled' : 'quiz__button'} disabled={isBtnDisabled} onClick={nextQuestion}>Next Question</button>
                    </div>
                ) : null}
            </React.Fragment>
        ))}
    </div>
    ) : <GameOver score={score} setScore={setScore} questions={questions} setCurrentQuestion={setCurrentQuestion} setGameStarted={setGameStarted}/>}
    </>
  )
}

export default Questions