import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import "./PopUpItem.css"
import CreateIcon from '@material-ui/icons/Create';
import StarIcon from '@material-ui/icons/Star';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import axios from 'axios';
import VisitButtonPopUp from './VisitButtonPopUp';
import Modal from 'react-bootstrap/Modal'

function PopUpItem({repository,onClose}) {
    const [languageList,setLanguageList] = useState([]);

    useEffect(() => {
        async function fetchLanguages(){
        let languagesArray = [];
        try{
            const response = await axios.get(repository.languages,{
                headers : {'User-Agent' : 'shaikwasef'}
            })    
            languagesArray = Object.keys(response.data).map((key)=>key)
            setLanguageList(languagesArray);
        }
        catch(error){
           console.log(error)
        }
    }
    fetchLanguages()
    },[]);

    const languagesToString = () => {
        let languagesString = "";
        languageList.forEach((value) => {
            languagesString  = languagesString.concat(value," ");
        })
        return languagesString;
    }

    return (
      
            <Modal className= "popup-content modal" >
                         <button className="close" >
                             &times;
                         </button>
                <Modal.Header>
                     <Modal.Title className="header">{repository.name}</Modal.Title>
                 </Modal.Header>
                <Modal.Body>
                    <div className="content">
                        <div><CreateIcon style={{fontSize : "1.1em" , marginRight:"5px" , color:"blue"}}/>
                        {repository.description==null ? ": " : ": " +  repository.description}</div>
                        <div><StarIcon style = {{color:"rgb(245, 197, 66)" , fontSize : "1.1em" }}/>{": " + repository.stars}</div>
                        <div><DeveloperModeIcon  style = {{color:"purple" , fontSize : "1.1em" }}/> : {languagesToString()}</div>
                        <VisitButtonPopUp link = {repository.link}/>
                    </div>
                    </Modal.Body>
            </Modal >
    );
}

export default PopUpItem;