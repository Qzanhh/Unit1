import React from "react";

const Games = ({ title, genre, price, link, img}) =>{
    const linkClick = () => {
        window.location.href = link;
    };
    return(
        <div className="gameCard" onClick={linkClick}> 
                <img src= {img} alt="Game" />
                <h2>{title}</h2>
                <p>{genre}</p>
                <button>{price}</button>
        </div>
    )
}

export default Games