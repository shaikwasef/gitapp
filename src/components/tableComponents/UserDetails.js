import React from 'react';
import "./UserDetails.css"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {useSelector} from "react-redux";

function UserDetails() {
    const userDetails = useSelector(state => state.userReducer);

    return (
        <div>
            {!userDetails? <div/> : 
            <div className = "user-pane">
                <div className="responsive-user">
                    <img src= {userDetails.avatar}  className = "avatar" alt = "avatar"/>
                    <div className = "user-names">
                        <div style = {{fontSize:"22px"}}>{userDetails.name}</div>
                        <div style = {{color:"rgb(107,107,107)"}}>Username : {userDetails.userName}</div>
                    </div>
                </div>
                    <div>{userDetails.bio}</div>
                    <div className = "followers-container"><PeopleOutlineIcon style={{color:"grey"}}/> <span style={{color:"black"}}>{userDetails.followers}</span> follower  : <span style={{color:"black"}}>{userDetails.following}</span> following</div>
                    <div className = "email-container"><MailOutlineIcon style={{color:"grey"}}/><div className = "email">{userDetails.email}</div></div>
            </div>
            }
        </div>    
        
    );
}

export default UserDetails;