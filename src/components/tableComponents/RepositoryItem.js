import React from 'react';
import "./RepositoryItem.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';

import PopUpItem from './PopUpItem';


function RepositoryItem({repository}) {


    return (
        <div className="repository-container">
            <PopUpItem repository={repository}/>
            <div className="repository-description">
                {repository.description !=null? ( repository.description.length > 110 ? 
                repository.description.substring(0,105) + "....." : repository.description ): ""}
            </div>
            <div className="repository-stars">
                <StarBorderIcon style={{color : "grey"}} />{repository.stars}
            </div>
        </div>
    );
}

export default RepositoryItem;