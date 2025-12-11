import { useEffect, useState } from "react"
import { ReadJson } from "./services/jsonReadService"
import Card from "./components/Card"
import AddCard from "./components/AddCard"


export type cardType = {
  question: string,
  answer: string,
  points: number
}

const App = () => {

  const [data, setData] = useState<cardType[]>([])
  const [isCreating, setIsCreating] = useState<boolean>(false)

  useEffect(()=>{
    ReadJson()
      .then(data => setData(data))
  },[])

  const newExBtnClick = () => {
    if(isCreating)
    {
      setIsCreating(false)
    }
    else
    {
      window.location.reload()
    }
  }

  return (
    <div className="container">
      {!isCreating && data.length > 0 && <Card cardData={data} />}
      {isCreating && <AddCard />}

      <button className="newExBtn" onClick={newExBtnClick}>Új gyakorlat indítása</button>
      {!isCreating && <button onClick={() => setIsCreating(true)}>Új kártyák hozzáadása</button>}
    </div>
  )
}

export default App