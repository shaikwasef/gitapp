import React,{useState} from 'react';
import "./RepositoryItem.css"
import StarBorderIcon from '@material-ui/icons/StarBorder';

import PopUpItem from './PopUpItem';


function RepositoryItem({repository}) {
    const [showPopUp,setShowPopUp] = useState(false);

    return (
        <div className="repository-container">
            <div className = "repository-name" onClick = {() => { debugger;setShowPopUp(true)}}>{repository.name}</div>
            {showPopUp && <PopUpItem repository={repository} onClose = {() => setShowPopUp(false)} />}
            {/* {showPopUp ?  <PopUpItem repository={repository} show={showPopUp} onHide={() => setShowPopUp(false)}/> : ""} */}
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