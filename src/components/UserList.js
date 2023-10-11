import React from "react";

import './UserList.css';
import Card from "./UI/Card";
import UserItem from "./UserItem";
const UserList=props=>{
    return(
    <Card>
        <ul className="userList">
          {props.users.map(user=><UserItem key={user.id} userobj={user}/>)}
        </ul>
    </Card>
    );
}

export default UserList;