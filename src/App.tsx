import { useState } from 'react'
import Question from './components/Question'
import './App.css'
import AnswerSheet from './components/AnswerSheet'
import { Questions } from './Questions'
import Timer from './components/Timer'
import Result from './components/Result'
import Buttons from './components/Buttons'

function App() {
  const [index, setIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<number[]>(Array(Questions.length).fill(-1))
  const [finished, setFinished] = useState<boolean>(false)

  if(finished)
    return<Result answers={answers} />
  return (
    <div className='flex flex-col text-slate-900'>
      <div className='flex flex-col gap-8 sm:flex-row'>
        <div className='w-9/12'>
          <Question index={index} setIndex={setIndex} answers={answers} setAnswers={setAnswers} />
          <Buttons index={index} setIndex={setIndex} setFinished={setFinished} />
        </div>
        <div>
          <AnswerSheet index={index} setIndex={setIndex} answers={answers} />
          <Timer setFinished={setFinished} />
        </div>
      </div>
    </div>
  )
}

export default App
