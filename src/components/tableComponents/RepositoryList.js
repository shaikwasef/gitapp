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
    
    useEffect(() => {
        async function fetchData() {
        if(repoListUrl !== ""){
            try{
                
            const {data} = await axios.get(repoListUrl,{
                headers: {'User-Agent': 'shaikwasef'}
              })
            let repositoryDataList = [];
            repositoryDataList = data.map(dataPoint=>{
                    return  {
                                name : dataPoint.name,
                                description :  dataPoint.description,
                                stars :  dataPoint.stargazers_count,
                                languages :  dataPoint.languages_url,
                                link :  dataPoint.html_url
                            }
                })
            //gitHub api does not return data in sorted order even with the right query parameters   
            repositoryDataList.sort((a,b) => b.stars - a.stars);
            dispatch(updateRepoList(repositoryDataList));
            }
            catch{
                alert("There are no repositories for this user")
            }
        }
    }
    fetchData();
    } , [repoListUrl,dispatch])
    
    const repositoriesDisplay = repositories.map((repository,index) => {
         return (<RepositoryItem  key ={index} repository = {repository} />)  
    })


    return (
        <div>
       {!userDetails? <div/> :
       <div>
            <div style={{margin : "10px 0 10px 0"}}>Repositories : </div>
                <div className = "repository-pane">
                    {repositoriesDisplay}
                </div>
        </div>}
        </div>
        
    );
}

export default RepositoryList;