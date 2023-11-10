
const shuffleArray = (array)=>
    [...array].sort(()=> Math.random() - 0.5)

export const fetchData = async ()=>{
    const endpoint = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
    const response = await fetch(endpoint)
    const data = await response.json()
    return data.results.map(question => (
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }
    ))
}








