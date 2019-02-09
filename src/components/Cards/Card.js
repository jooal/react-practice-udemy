import React, {ReactDOM} from 'react';
import "../Cards/Card.css";

const Card = (props) => {


    return (
        <div className = "Card">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            {/* children refers to any element between opening and closing tag  */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}



export default Card
