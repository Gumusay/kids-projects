import React from "react"

function Card({item, id, handleClick }) {

    const itemClass = item.stat ? " active " + item.stat : "";
    return(
        <div className={"carde" + itemClass} onClick={() => handleClick(id)}>
            <p>{item.text}</p>
        </div>
    )

}

export default Card;