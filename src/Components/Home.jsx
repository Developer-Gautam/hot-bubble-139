import React from "react"
import "../App.css"
import CardTemplate from "../Assets/CardTemplate"


const Home = ({ data , loading }) => {
  return (
    <div>

      <h1 style={{textAlign:"center"}}>Top Reads</h1>
        
      <div className="topReadBooks">
      {
        data.map((el)=>(
            <div key = {`${el.author}${el.book_image}`}>

                <CardTemplate loading={loading} book_image={el.book_image} title = {el.title} author={el.author}/>  

            </div>
        ))
      }
      </div>

    </div>
  )
}

export default Home
