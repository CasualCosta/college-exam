import { useEffect, useState } from 'react'
import Question from './components/Question'
import './App.css'
import AnswerSheet from './components/AnswerSheet'
import { Questions } from './Questions'
import Timer from './components/Timer'
import Result from './components/Result'
import Buttons from './components/Buttons'
import Finish from './components/Finish'

function App() {
  const [index, setIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<number[]>(Array(Questions.length).fill(-1))
  const [finished, setFinished] = useState<boolean>(false)
  
  useEffect(() => {
    document.title = "Exam page"
  })

  if(finished)
    return<Result answers={answers} />
  return (
    <div className='w-full flex flex-col text-slate-900'>
        <div className='flex flex-col sm:flex-row sm:gap-8'>
          <div className='flex flex-col w-auto sm:w-9/12 gap-4 py-4'>
            <Question index={index} answers={answers} setAnswers={setAnswers} />
            <Buttons index={index} setIndex={setIndex} />
          </div>
          <div className='flex flex-col'>
            <AnswerSheet index={index} setIndex={setIndex} answers={answers} />
            <Timer setFinished={setFinished} />
          </div>
        </div>
        <Finish setFinished={setFinished} />
    </div>
  )
}

export default App
