import React, { Dispatch, SetStateAction } from 'react'
import { Questions } from '../Questions'

type Props = {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>,
}

const Buttons: React.FC<Props> = ({index, setIndex}) => {

    return (
        <div className='flex flex-col items-center gap-4 my-2'>
            <div className='flex flex-col justify-center gap-2 sm:flex-row'>
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
        </div>
    )
}

export default Buttons