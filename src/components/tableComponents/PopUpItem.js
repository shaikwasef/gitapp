import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import "./PopUpItem.css"
import CreateIcon from '@material-ui/icons/Create';
import StarIcon from '@material-ui/icons/Star';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import axios from 'axios';
import VisitButtonPopUp from './VisitButtonPopUp';

function PopUpItem({repository}) {
    const [languageList,setLanguageList] = useState([]);

    useEffect(() => {
        async function fetchLanguages(){
        let languagesArray = [];
        try{
            axios.defaults.headers.common['Authorization'] = 'token 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' ;
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
        <div>
            <Popup
                className = "popup-content"
                trigger={<div className = "repository-name">{repository.name}</div>}
                modal
                nested
                >{
                    close  => (
                        <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    <div className="header">{repository.name}</div>
                    <div className="content">
                        <div><CreateIcon style={{fontSize : "1.1em" , marginRight:"5px" , color:"blue"}}/>
                        {repository.description==null ? ": " : ": " +  repository.description}</div>
                        <div><StarIcon style = {{color:"rgb(245, 197, 66)" , fontSize : "1.1em" }}/>{": " + repository.stars}</div>
                        <div><DeveloperModeIcon  style = {{color:"purple" , fontSize : "1.1em" }}/> : {languagesToString()}</div>
                        <VisitButtonPopUp link = {repository.link}/>
                    </div>
                    </div>)
                }
            </Popup>
        </div>
    );
}

export default PopUpItem;