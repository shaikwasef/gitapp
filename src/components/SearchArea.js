import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchArea.css";
import axios from "axios";
import {changeUser} from "../actions/changeUser";
import {userFound,userNotFound,noUser} from "../actions/userStatus"
import {useDispatch} from "react-redux";
import {updateRepoList} from "../actions/updateRepoList"

function SearchArea(props) {
    const dispatch = useDispatch();
    const [searchText,setSearchText] = useState("");

    const searchApi = async (e) => {
        if(e.code === 'Enter' || e ==='Enter' || e.keyCode===13){

            if(searchText === ""){
                dispatch(noUser());
                dispatch(updateRepoList([]));
                dispatch(changeUser(null));
                return;
            }
            const fetchUrl = "https://api.github.com/users/" + searchText;
            try{
                axios.defaults.headers.common['Authorization'] = 'token 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' ;
                const response = await axios.get(fetchUrl , {
                    headers : {'User-Agent' : 'shaikwasef'}
                })    
                dispatch(changeUser(
                    {
                        avatar : response.data.avatar_url,
                        name : response.data.name ,
                        userName : response.data.login,
                        followers : response.data.followers,
                        following : response.data.following ,
                        email : response.data.email,
                        bio : response.data.bio ,
                        repos : response.data.repos_url
                    }
                ));
                dispatch(userFound());
                setSearchText("");
            }
            catch{
                dispatch(changeUser(null));
                dispatch(updateRepoList([]));
                dispatch(userNotFound());
            }
        }
    }

    return (
        <div className="search-area">
            <input placeholder = "Enter github username..." required className = "search-box" 
            onKeyUp = {searchApi} onChange ={(e) => setSearchText(e.target.value)}/>
            <SearchIcon style = {{fontSize : 20}} onClick= {() => searchApi('Enter')}/>
        </div>
    );
}

export default SearchArea;