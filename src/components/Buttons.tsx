import React, { Dispatch, SetStateAction } from 'react'
import { Questions } from '../Questions'

type Props = {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>,
    setFinished: Dispatch<SetStateAction<boolean>>
}

const Buttons: React.FC<Props> = ({index, setIndex, setFinished}) => {

    return (
        <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <button
                    className='rounded border border-slate-700 disabled:opacity-0 w-40 py-2'
                    disabled={index === 0}
                    onClick={() => setIndex(index - 1)}
                    >
                    Previous Question
                </button>
                <button
                    disabled={index == Questions.length - 1}
                    className='rounded border border-slate-700 disabled:opacity-0 w-40 py-2'
                    onClick={() => setIndex(index + 1)}
                    >
                    Next Question
                </button>
            </div>
            <button 
                className='flex justify-center gap-8 rounded border border-slate-700 disabled:opacity-0 w-40 py-2'
                onClick={() => setFinished(true)}
            >
                Finish Test
            </button>
        </div>
    )
}

export default Buttons