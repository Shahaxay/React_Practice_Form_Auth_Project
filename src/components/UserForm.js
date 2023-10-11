import React,{useState} from "react";

import './UserForm.css'
import Card from "./UI/Card";
import Button from "./UI/Button";

const UserForm=props=>{
    const [name,setUsername]=useState('');
    const [age,setAge]=useState('');
    const usernameChangeHandler=(e)=>{
        setUsername(e.target.value);
    }
    const ageChangeHandler=(e)=>{
        setAge(e.target.value);
    }
    const submissionHandler=(e)=>{
        e.preventDefault();
        if(age.trim().length===0||name.trim().length===0){
            props.onValidation({
                title:'Invalid Input',
                message:'Please enter a valid name and age (non-empty values)'
            })
            return;
        }else if(age<0){
            props.onValidation({
                title:'Invalid Input',
                message:'Please enter a valid age (> 0)'
            })
            return;
        }
        const obj={username:name,age:age};
        props.onUserAdded(obj);
    }
    
    return(
        <Card>
            <form className="form" onSubmit={submissionHandler}>
                <label for='username'>Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler}></input>
                <label for='age'>Age(Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}></input>
                <Button value="Add User"/>
            </form>
        </Card>
    );
}
export default UserForm;