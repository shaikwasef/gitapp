import React from 'react';
import "./VisitButtonPopUp.css"

function VisitButtonPopUp({link}) {
    return (
        <div className= "visit-button"><a rel="noreferrer" target="_blank"
                        style = {{textDecoration : "none"}}
                        href = {link}>
                        <button className= "visit">Visit
                        </button></a>
        </div>
    );
}

export default VisitButtonPopUp;