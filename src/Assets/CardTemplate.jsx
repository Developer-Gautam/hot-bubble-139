import React from 'react'
import "../App.css"

const CardTemplate = ({book_image, title}) => {


  return (
    <div>
       <div>
            <img src={book_image} alt={title} className="book_image"/>

            <div>
                <h2 className='title'>{title}</h2>
            </div>
       </div>
    </div>
  )
}

export default CardTemplate
