import React,{useState} from 'react';

import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ErrorModel from './components/UI/ErrorModel';

const App=()=> {
  const [users,setUser]=useState([]);
  const [error,setError]=useState();
  const errorHandler=errObj=>{
    setError({
      title:errObj.title,
      message:errObj.message
    });
  }
  const errorConfirmHandler=()=>{
    setError(null);
  }
  const userAddedHandler=user=>{
    setUser(prevUser=>[user,...prevUser])
  }
  return (
    <div>
      {error && <ErrorModel errObj={error} onConfirm={errorConfirmHandler}/>}
      <UserForm onUserAdded={userAddedHandler} onValidation={errorHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
