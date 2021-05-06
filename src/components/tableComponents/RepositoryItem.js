import React from 'react';
import "./RepositoryItem.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';


function RepositoryItem({name,stars,description}) {
    
    return (
        <div className="repository-container">
            <div className = "repository-name">
                {name}
            </div>
            <div className="repository-description">
                {description != null ? ( description.length > 110 ? description.substring(0,130) + "....." : description ): ""}
            </div>
            <div className="repository-stars">
                <StarBorderIcon style={{color:"grey"}}/>{stars}
            </div>
        </div>
    );
}

export default RepositoryItem;