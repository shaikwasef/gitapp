import React from 'react';
import UserDetails from "./tableComponents/UserDetails"
import RepositoryList from "./tableComponents/RepositoryList"
import "./Table.css"

function Table(props) {
    return (
        <div className = "table">
            <UserDetails />
            <RepositoryList />
        </div>
    );
}

export default Table;