import { useState } from "react"
import type { cardType } from "../App"


const Card = (props: cardType[]) => {

    const [flipped, setFlipped] = useState<boolean>(false)

    const [currentIdx, setCurrentIdx] = useState<number>(1)
    const [currentData, setCurrentData] = useState<cardType>(props[currentIdx - 1])
    

    const nextQuestion = () => {
        setFlipped(false)
        console.log(currentIdx)

        if(currentIdx >= 12)
        {
            window.location.reload()
        }
        else
        {
            setCurrentIdx(prev => prev + 1)
        }
        setCurrentData(props[currentIdx])
        
    }

  return (
    <div>
        <section>
            <div className="flip-card" >
                <div className="flip-card-inner"
                     onClick={() => {!flipped && setFlipped(true)
                    }}
                    style={ flipped ? {transform: "rotateY(180deg)" } : {}}
                >
                    <div className="flip-card-front">
                        <h2>
                            {currentData && currentData.question}
                        </h2>
                    </div>
                    <div className="flip-card-back">
                        <h2>
                            {currentData && currentData.answer}    
                        </h2> 
                        <div>
                            <button className="button1"
                                onClick={nextQuestion}
                            >
                                Eltaláltam
                                <br/>
                                <i className="fa-regular fa-circle-check"></i>
                            </button>
                            <button className="button2"
                                onClick={nextQuestion}
                            >
                                Nem sikerült
                                <br/>
                                <i className="fa-regular fa-circle-xmark"></i>
                            </button>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section>
            {currentIdx} / 12
        </section>
    </div>
  )
}

export default Card