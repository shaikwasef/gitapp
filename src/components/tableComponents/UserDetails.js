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
                <img src= {userDetails.userData.avatar}  className = "avatar"/>
                <div><b>NAME : </b>{userDetails.userData.name}</div>
                <div><b>USERNAME :</b> {userDetails.userData.userName}</div>
                <div className = "followers-container"><PeopleOutlineIcon/> <b> : </b>followers - <b>{userDetails.userData.followers}</b> : following - <b>{userDetails.userData.following}</b></div>
                <div className = "email-container"><MailOutlineIcon/> <b>:</b> <div className = "email">{userDetails.userData.email}</div></div>
                <div><b>Bio : </b>{userDetails.userData.bio}</div>
            </div>
            }
        </div>    
        
    );
}

export default UserDetails;