import React from 'react';
import UserDetails from "./tableComponents/UserDetails"
import RepositoryList from "./tableComponents/RepositoryList"
import "./Table.css"
import {useSelector } from 'react-redux';

function Table(props) {
    const userDetails = useSelector(state => state.userReducer);
    const userStatus = useSelector(state => state.userFoundReducer);
    
    return (
        <div>
            {userDetails? 
            <div className = "table">
                <UserDetails />
                <RepositoryList />
            </div> :
                userStatus === "user_not_found" ?
                <div style={{marginTop : "30px"}}> Username entered is not available on github.com
                </div> :
                <div style={{marginTop : "30px"}}> Please enter a username in the search box
                </div>
            }     
        </div>
    );
}

export default Table;