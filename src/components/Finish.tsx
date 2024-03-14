import React, { Dispatch, SetStateAction } from 'react'

type Props = {
    setFinished: Dispatch<SetStateAction<boolean>>
}
const Finish: React.FC<Props> = ({setFinished}) => {

    return (
        <div className='sm:w-9/12'>

        <button 
                className='flex justify-center gap-8 rounded border border-slate-700 disabled:opacity-0 w-40 my-2 sm:my-0 py-2 max-w-48 mx-auto'
                onClick={() => setFinished(true)}
            >
                Finish Test
        </button>
        </div>
    )
}

export default Finish