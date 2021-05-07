import React,{useRef} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchArea.css";
import axios from "axios";
import {changeUser} from "../actions/changeUser";
import {useDispatch} from "react-redux";
import {updateRepoList} from "../actions/updateRepoList"

function SearchArea(props) {
    const dispatch = useDispatch();
    const searchText = useRef(null);

    const searchApi = async (e) => {
        if(e.code === 'Enter' || e ==='Enter' || e.keyCode===13){
            const fetchUrl = "https://api.github.com/users/" + searchText.current.value;
            await axios.get(fetchUrl)
            .then((response) => {
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
                searchText.current.value = "";
            })
            .catch(() => {
                dispatch(changeUser("notFound"));
                dispatch(updateRepoList([]));
            });
            
        }
    }

    return (
        <div className="search-area">
            <input placeholder = "Enter github username..." required className = "search-box" onKeyUp = {searchApi} ref = {searchText}/>
            <SearchIcon style = {{fontSize : 20}} onClick= {() => searchApi('Enter')}/>
        </div>
    );
}

export default SearchArea;