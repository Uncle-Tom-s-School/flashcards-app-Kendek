import {  useState } from "react"
import type { cardType } from "../App"


const Card = ({cardData}: {cardData:cardType[]}) => {

    const [flipped, setFlipped] = useState<boolean>(false)

    const [currentIdx, setCurrentIdx] = useState<number>(1)
    const [currentData, setCurrentData] = useState<cardType>(cardData[currentIdx - 1])
    

    const nextQuestion = () => {
        setFlipped(false)

        console.log(cardData.length)
        if(currentIdx >= 12)
        {
            window.location.reload()
        }
        else
        {
            setCurrentIdx(prev => prev + 1)
        }
        setCurrentData(cardData[currentIdx])
        
    }
   

  return (
    <div className="cardContainer">
        <section className="flipCardSection">
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
                        <div className="buttonContainer">
                            <div className="button1"
                                onClick={nextQuestion}
                            >
                                Eltaláltam
                                <br/>
                                <i className="fa-regular fa-circle-check"></i>
                            </div>
                            <div className="button2"
                                onClick={nextQuestion}
                            >
                                Nem sikerült
                                <br/>
                                <i className="fa-regular fa-circle-xmark"></i>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section className="counterSection">
            <h3>{currentIdx} / {cardData.length}</h3>
            <progress max={cardData.length} value={currentIdx}></progress>
        </section>
    </div>
  )
}

export default Card