import React, { useState, useRef } from "react";

import './UserForm.css'
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModel from "./UI/ErrorModel";

const UserForm = props => {
    const nameRef=useRef();
    const ageRef=useRef();
    const collegeRef=useRef();
    const submissionHandler = (e) => {
        e.preventDefault();
        const name=nameRef.current.value;
        const age=ageRef.current.value;
        const college=collegeRef.current.value;
        if (age.trim().length === 0 || name.trim().length === 0 || college.trim().length===0) {
            errorHandler({
                title: 'Invalid Input',
                message: 'Please enter a valid name, age and college (non-empty values)'
            })
            return;
        } else if (age < 0) {
            errorHandler({
                title: 'Invalid Input',
                message: 'Please enter a valid age (> 0)'
            })
            return;
        }
        const obj = { username: name, age: age, college: college, id: Math.random().toString() };
        /*reseting form */
        //note: manipulating dom with refs in not recommended, we are using here becoz we are not changing dom, we cange only user input
        nameRef.current.value='';
        ageRef.current.value='';
        collegeRef.current.value='';
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
                <input id="username" type="text" ref={nameRef}></input>
                <label for='age'>Age(Years)</label>
                <input id="age" type="number" ref={ageRef}></input>
                <label for='college'>College Name</label>
                <input id="college" type="text" ref={collegeRef}></input>
                <Button value="Add User" />
            </form>
        </Card>
    );
}
export default UserForm;