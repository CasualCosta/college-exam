import React, { Dispatch, SetStateAction } from 'react'
import { Questions } from '../Questions'
import getLetter from '../getLetter'

type Props = {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>,
    answers: number[],
}

const AnswerSheet: React.FC<Props> = ({index, setIndex, answers }) => {
  return (
    <div className='grid grid-cols-4 gap-x-2 gap-y-1'>
        {answers.map((a, i) => {
            return <button 
                className={`w-8 rounded border border-slate-700 ${index == i ? "bg-slate-400" : "bg-slate-100"}`}
                onClick={() => setIndex(i)}
                key={i}
            >
                {i + 1}{`${a >= 0 ? getLetter(a) : ""}`}
            </button>
        })}
    </div>
  )
}

export default AnswerSheet