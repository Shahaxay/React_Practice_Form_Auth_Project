import React, { useState } from "react";

import './UserForm.css'
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModel from "./UI/ErrorModel";

const UserForm = props => {
    const [name, setUsername] = useState('');
    const [age, setAge] = useState('');
    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }
    const submissionHandler = (e) => {
        e.preventDefault();
        if (age.trim().length === 0 || name.trim().length === 0) {
            errorHandler({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;
        } else if (age < 0) {
            errorHandler({
                title: 'Invalid Input',
                message: 'Please enter a valid age (> 0)'
            })
            return;
        }
        const obj = { username: name, age: age, id: Math.random().toString() };
        /*reseting form */
        setUsername('');
        setAge('');
        props.onUserAdded(obj);
    }
    /*Form validation error handling */
    const [error, setError] = useState();
    const errorHandler = errObj => {
        setError({
            title: errObj.title,
            message: errObj.message
        });
    }
    const errorConfirmHandler = () => {
        setError(null);
    }

    return (
        <Card>
            {error && <ErrorModel errObj={error} onConfirm={errorConfirmHandler} />}
            <form className="form" onSubmit={submissionHandler}>
                <label for='username'>Username</label>
                <input id="username" type="text" value={name} onChange={usernameChangeHandler}></input>
                <label for='age'>Age(Years)</label>
                <input id="age" type="number" value={age} onChange={ageChangeHandler}></input>
                <Button value="Add User" />
            </form>
        </Card>
    );
}
export default UserForm;