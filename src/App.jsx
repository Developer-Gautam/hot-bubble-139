import { useEffect, useState } from "react"
import Navbar from "./Assets/Navbar"
import Home from "./Components/Home"

function App() {

  let [data , setData] = useState([])
  let [loading, setLoading] = useState(false)


  let getData = async()=>{
    setLoading(true)
    let res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nbM8W6558MVDqGRG06eCvLddU0IZFEht`)
    res = await res.json()
    setLoading(false)
    setData(res.results.books)
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(data)


  return (
    <div className="App">
      <Navbar/>
      <Home data={data} loading={loading}/>
    </div>
  )


}

export default App
