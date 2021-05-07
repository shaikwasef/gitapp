import React from 'react';
import UserDetails from "./tableComponents/UserDetails"
import RepositoryList from "./tableComponents/RepositoryList"
import "./Table.css"
import { useSelector } from 'react-redux';

function Table(props) {
    const userDetails = useSelector(state => state.userReducer);
    return (
        <div>
            {userDetails == 'notFound' ? <div style={{marginTop : "30px"}}> Username entered is not available on <a href = "https://www.github.com" rel="noreferrer" target="_blank">github.com</a></div> :
            <div className = "table">
                <UserDetails />
                <RepositoryList />
            </div>}
        </div>
    );
}

export default Table;