import {  useEffect, useState } from "react"
import {fetchData} from '../api/fetch'
import Loading from "./Loading"
import Questions from "./Questions"

const Quiz = ({setGameStarted}) => {

    const [questions, setQuestions] = useState(null)
    const [loading, setLoading] = useState(true)
    
    
  useEffect(()=>{
    const getData = async()=>{
      const myQuestions = await fetchData()
      setQuestions(myQuestions)
      setLoading(false)
    }
    getData()   
  },[])

  return (
    <div className="quiz__container">
      {loading ? <Loading /> : <Questions questions={questions} setGameStarted={setGameStarted}/>}
    </div>
  )
}

export default Quiz