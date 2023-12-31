import React,{useState} from 'react';

import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App=()=> {
  const [users,setUser]=useState([]);
  
  const userAddedHandler=user=>{
    setUser(prevUser=>[user,...prevUser])
  }
  return (
    <div>
      <UserForm onUserAdded={userAddedHandler}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
