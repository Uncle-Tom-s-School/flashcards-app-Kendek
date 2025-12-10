import { useEffect, useState } from "react"
import { ReadJson } from "./services/jsonReadService"
import Card from "./components/Card"


export type cardType = {
  question: string,
  answer: string,
  points: number
}

const App = () => {

  const [data, setData] = useState<cardType[]>([])

  useEffect(()=>{
    ReadJson()
      .then(data => setData(data))
  },[])

  return (
    <div className="container">
      {data.length > 0 && <Card {...data}/>}
    </div>
  )
}

export default App