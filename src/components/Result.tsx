import React from 'react'
import { Questions } from '../Questions'

type Props = {
    answers: number[]
}

const Result: React.FC<Props> = ({answers}) => {
    function getCorrectAnswers(): number{
        let score = 0
        answers.forEach((a, i) => {
            if(a === Questions[i].correct)
                score++
        })
        return score
    }
    return (
        <div>
            <p>
                Finished!
            </p>
            <p>
                {`Score: ${getCorrectAnswers()}/${Questions.length}`}
            </p>
        </div>
    )
}

export default Result