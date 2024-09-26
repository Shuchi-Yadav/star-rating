import React, {useState} from 'react'

const Star = ({isFilled, onClick, onMouseOver}) => {
  return (
    <span onClick={onClick} onMouseOver={onMouseOver} style={{
        cursor:'pointer',
        fontSize: "30px",
        color : isFilled ? 'gold':"gray" 
     }}>
        {isFilled ? '★' : '☆'}
      
    </span>
  )
}

// Rating Component

const StarRating = ({totalStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hoverRating, serHoverRating] = useState(0)

    const handleClick = (index) => {
        setRating(index + 1)
    }

    const handleMouseOver = (index) => {
        serHoverRating(index + 1)
    }

    const handleMouseout = () => {
        serHoverRating(0)
    };

    return(
        <div>
            <h2>Rate the item</h2>
            <div onMouseOut={handleMouseout}>
               {[...Array(totalStars)].map((_, index) => (
                <Star
                   key={index}
                   isFilled={index < (hoverRating || rating)}
                   onClick={() => handleClick(index)}
                   onMouseOver={() => handleMouseOver(index)}
                />
                ))}
            </div>
            <p>Your Rating: {rating}</p>
        </div>
    )
}

export default StarRating
