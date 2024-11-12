import { useState } from 'react'
import './App.css'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showScore,setShowScore]=useState(false)

  const nextque = () => {
    setAnswered(false)
    setSelectedAnswer(null)
    const nextQuestion=currentQuestion+1
    if(nextQuestion <questions.length){
      setCurrentQuestion(nextQuestion)
    }else
    {
      setShowScore(true)
    }
  
  }

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true)
    setSelectedAnswer(index)
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  const questions = [
    {
      questionText: 'What is the capital of India?',
      answerOptions: [
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Pune", isCorrect: false },
        { answerText: "Maharashtra", isCorrect: false },
        { answerText: "Panjab", isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the PM of India?',
      answerOptions: [
        { answerText: "Rahul Gandhi", isCorrect: false },
        { answerText: "Kejariwal", isCorrect: false },
        { answerText: "P.M.MODI", isCorrect: true },
        { answerText: "Uddhav Thakarey", isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the CEO of Tesla?',
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Pakistan?',
      answerOptions: [
        { answerText: "India", isCorrect: false },
        { answerText: "Paris", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Islamabad", isCorrect: true },
      ],
    },
  ]

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
        <div className='p-2 border text-center font-bold mb-2 text-xl'>Quiz App</div>

        {showScore ? <div> You Score {score} of {questions.length}
        </div> :

        <div>
          <div>{questions[currentQuestion].questionText}</div>
          {questions[currentQuestion].answerOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOption(index, option.isCorrect)}
              className={`block w-full p-2 mt-2 rounded border ${answered ? 
                option.isCorrect ? "bg-green-200" : selectedAnswer === index ? "bg-red-400" : "" : ""}`}
            >
              {option.answerText}
            </button>
          ))}

          <button
            className={`block w-full p-2 rounded ${answered ? "bg-green-500" : "bg-green-300"} text-white`}
            disabled={!answered}
            onClick={nextque}
          >
            Next Question
          </button>

          <p className='text-center text-gray-400 text-sm'>Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        }
      </div>
    </div>
  )
}

export default App
