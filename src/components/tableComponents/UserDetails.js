import React from 'react';
import "./UserDetails.css"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useSelector} from "react-redux";

function UserDetails(props) {
    const userDetails = useSelector(state => state.userReducer);

    return (
        <div>
            {userDetails == null ? <div/> : 
            <div className = "user-pane">
                <img src= {userDetails.avatar}  className = "avatar"/>
                <div><b>NAME : </b>{userDetails.name}</div>
                <div><b>USERNAME :</b> {userDetails.userName}</div>
                <div className = "followers-container"><PeopleOutlineIcon/> <b> : </b>followers - <b>{userDetails.followers}</b> : following - <b>{userDetails.following}</b></div>
                <div className = "email-container"><MailOutlineIcon/> <b>:</b> <div className = "email">{userDetails.email}</div></div>
                <div><b>Bio : </b>{userDetails.bio}</div>
            </div>
            }
        </div>    
        
    );
}

export default UserDetails;