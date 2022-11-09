import { useEffect, useState } from "react"
import Home from "./Components/Home"

function App() {

  let [data , setData] = useState([])

  let getData = async()=>{
    let res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nbM8W6558MVDqGRG06eCvLddU0IZFEht`)
    res = await res.json()
    setData(res.results.books)
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(data)


  return (
    <div>
      <Home data={data}/>
    </div>
  )


}

export default App
