import React, { useRef, useState } from "react";
import Card from "../UI/Card";

import classes from "./AddUse.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const [error, setError] = useState();
 
  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setAge(event.target.value);
  // };
  const AddUserHandler = (event) => {
    const enterName = nameInputRef.current.value;
    const enterAge = ageInputRef.current.value;
    const enterCollege = collegeInputRef.current.value;
    event.preventDefault();
    if (enterName.trim().length === 0 || enterAge.trim().length === 0 || enterCollege.trim().length===0) {
      setError({
        title: "invalid Input",
        message: "please enter a valid name,age and College Name",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age(>0)",
      });
      return;
    }
    // console.log(name,age)
    props.onAddUser(enterName, enterAge,enterCollege);
    // console.log(nameInputRef.current.value)

    // setName("");
    // setAge("");
nameInputRef.current.value = ''
ageInputRef.current.value = ''
collegeInputRef.current.value=''
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="name"
            type="text"
            // value={name}
            // onChange={nameChangeHandler}
            ref = {nameInputRef}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <label htmlFor="college">Enter College name</label>
          <input
            id="college"
            type="text"
            // value={age}
            // onChange={ageChangeHandler}
            ref={collegeInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
