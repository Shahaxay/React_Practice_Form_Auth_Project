import React from "react";

import './UserItem.css'

const UserItem=props=>{
    return(
        <div className="userItem">
            {`${props.userobj.username} (${props.userobj.age} years old)`}
        </div>
    );
}

export default UserItem;