import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Props = {
    setFinished: Dispatch<SetStateAction<boolean>>
}
const Timer: React.FC<Props> = ({setFinished}) => {
    const [timer, setTimer] = useState<number>(3700)
    const [show, setShow] = useState(false)
    useEffect(() => {
        if(timer < 0){
            setFinished(true)
            return
        }
        setTimeout(() => {
            setTimer(timer - 1)
        }, 1000); 
    }, [timer])
    
    function timeConvert(num:number): string { 
        const hours = Math.floor(num / 3600)
        const minutes = Math.floor((num - hours * 3600)  / 60);  
        const seconds = num % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
    return (
        <div className='flex flex-col my-8 ml-9 sm:ml-0 gap-2 items-center justify-center max-w-48 mx-auto'>
            <button
                className='w-40 px-2 py-1 border border-slate-700 rounded'
                onClick={() => setShow(!show)}
            >
                {`${show ? "Hide Timer" : "Show Timer"}`}
            </button>
            {show && <p className='w-40 text-center rounded px-2 py-1 border border-slate-700'>
                {timeConvert(timer)}
            </p>}
        </div>
    )
}

export default Timer