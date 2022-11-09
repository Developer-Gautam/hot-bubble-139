import React from "react"
import "../App.css"
import CardTemplate from "../Assets/CardTemplate"


const Home = ({ data }) => {
  return (
    <div>

      <h1>Top Reads</h1>
        
      <div className="topReadBooks">
      {
        data.map((el)=>(
            <div key = {`${el.author}${el.book_image}`}>

                <CardTemplate book_image={el.book_image} title = {el.title}/>  

            </div>
        ))
      }
      </div>

    </div>
  )
}

export default Home
