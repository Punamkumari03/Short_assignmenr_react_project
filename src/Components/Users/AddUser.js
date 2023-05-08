import React, { useState } from "react";
import Card from "../UI/Card";

import classes from "./AddUse.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState();
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(name.trim().length===0 || age.trim().length ===0){
        setError({
            title: 'invalid Input',
            message: 'please enter a valid name and age'
        })
        return;
    }
    if(+age<1){
        setError({
            title: 'invalid age',
            message: 'please enter a valid age(>0)'
        })
        return;
    }
    // console.log(name,age)
    props.onAddUser(name,age);
    
    setName('');
    setAge('');
  };

  const errorHandler = ()=>{
    setError(null);
  }
  return (
    <>
    {error && <ErrorModel  title ={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="name" type="text" value={name} onChange={nameChangeHandler}></input>
        <label htmlFor="age">Age(years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUser;
