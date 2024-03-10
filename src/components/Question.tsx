import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Questions } from '../Questions'
import getLetter from '../getLetter'

type Props = {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>,
    answers: number[],
    setAnswers: Dispatch<SetStateAction<number[]>>
}

const Question: React.FC<Props> = ({index, setIndex, answers, setAnswers}) => {
    const { description, alternatives: alternatives } = Questions[index]

    function handleSelection(alternative: number) {
        const updated = answers.map((a, i) => {
            return i === index ? alternative : a
        })
        setAnswers(updated)
    }
    return (
        <div className='pb-8'>
            <div className='text-left text-2xl mb-4 min-h-20'>
                {index + 1}. {description}
            </div>
            <div className='flex flex-col text-left gap-2'>
                {alternatives.map((alt, i) => {
                    return <button 
                        key={i}
                        onClick={() => handleSelection(i)}
                        className={`text-left border border-slate-800 rounded pl-4 ${answers[index] == i ? "bg-slate-400" : "bg-slate-100"}`}
                    >
                        {getLetter(i)}. {alt}
                    </button>
                })}
            </div>
        </div>
    )
}

export default Question