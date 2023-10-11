import React from "react";

import './UserList.css';
import Card from "./UI/Card";
import UserItem from "./UserItem";
const UserList=props=>{
    return(
    <Card>
          {props.users.map(user=><UserItem userobj={user}/>)}
    </Card>
    );
}

export default UserList;