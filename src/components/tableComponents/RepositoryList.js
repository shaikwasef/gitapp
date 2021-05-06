import React, { useEffect } from 'react';
import "./RepositoryList.css"
import {useDispatch, useSelector} from "react-redux"
import axios from 'axios';
import { updateRepoList } from '../../actions/updateRepoList';
import RepositoryItem from './RepositoryItem';

function RepositoryList(props) {
    const userDetails = useSelector(state => state.userReducer);
    const repositories = useSelector(state => state.repositoryReducer);
    const repoListUrl = userDetails == null ? "" : userDetails.repos;
    const dispatch = useDispatch();
    
    useEffect(async() => {
        if(repoListUrl != ""){
            await axios.get(repoListUrl).then((response) =>{
                let repositoryDataList = [];
                const data = response.data; 
                for(let i = 0 ; i < data.length ; i++){
                    const repoDataObject = {
                                name : data[i].name,
                                description :  data[i].description,
                                stars :  data[i].stargazers_count,
                                language :  data[i].languages_url,
                                link :  data[i].html_url
                            }
                            repositoryDataList = repositoryDataList.concat(repoDataObject);
                }
                repositoryDataList.sort((a,b) => b.stars - a.stars);
                dispatch(updateRepoList(repositoryDataList));
            })
        }
    } , [repoListUrl])
    
    const repositoriesDisplay = repositories.map((repository) => {
         return (<RepositoryItem  name = {repository.name} description = {repository.description} stars = {repository.stars} />)  
    })


    return (
        <div>
            <div style={{marginBottom : "5px"}}>Repositories : </div>
            <div className = "repository-pane">
                {repositoriesDisplay}
            </div>
        </div>
    );
}

export default RepositoryList;