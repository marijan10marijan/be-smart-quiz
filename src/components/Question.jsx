import DOMPurify from "dompurify"

const Question = ({answer, setIsBtnDisabled, correctAnswer, setScore}) => {

    const handleAnswerClick = (e)=>{
        document.querySelectorAll('.button').forEach(btn => {
            btn.setAttribute('disabled', true)
        }) 
        setIsBtnDisabled(false)
        if(e.target.value === correctAnswer){
            setScore(prev => prev + 1)
            e.target.style.background = 'green'
        }else{
            e.target.style.background = 'red'
        }
    }

  return (
    <button value={answer} onClick={handleAnswerClick} className="button" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(answer)}}></button>
  )
}

export default Question