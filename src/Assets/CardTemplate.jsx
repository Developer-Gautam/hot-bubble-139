import React from "react"
import "../App.css"
import LoadingImage from "./LoadingImage/LoadingImage.gif"

const CardTemplate = ({ book_image, title, author, loading }) => {
  return (
    <div className="card">
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <img src={book_image} alt={title} className="book_image" />

          <div className="cardContent">
            <b>
              <h3 className="title">{title}</h3>
            </b>
            <p>Author: {author}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardTemplate
