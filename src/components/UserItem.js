import React from "react";

import './UserItem.css'

const UserItem=props=>{
    return(
        <li className="userItem">
            {`${props.userobj.username} (${props.userobj.age} years old)`}
        </li>
    );
}

export default UserItem;