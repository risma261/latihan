import React from 'react'
import "./Home.css";
import { useState, useEffect } from 'react';
import { gql, useLazyQuery } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const getPassengerById = gql `
query MyQuery($_eq: String, $_eq1: String) {
    autn(where: {username: {_eq: $_eq1}, password: {_eq: $_eq}}, limit: 1) {
      id
      level
      name
      password
      username
    }
  }  
`;
export default function Login() {
const [username, setUserName] = useState("");
const [password, setPassword] = useState({
  showPassword: false,
});
const [getPassenger, {data, loading, error}] = useLazyQuery(getPassengerById);
let navigate = useNavigate();

useEffect(() => {
  if (data?.autn.length === 1) {
    console.log("data", data);
    return navigate ("/HomePage");
  }
}, [data]);

const handleChangeUserName = (e) => {
  setUserName(e.target.value);
};
const handleChangePassword = (e) => {
  setPassword(e.target.value);
};

const handleClickShowPassword = () => {
  setPassword({ ...password, showPassword: !password.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

const login = () =>{
  getPassenger ({
    variables: {
      _eq: password, _eq1: username
    }
  }) ;
}

if (loading){
  return <h1>Loading</h1>;
}

console.log(username + " " + password);

  return (
   <div className="form">
      <form className="login">
      <h1>Login</h1>
      <div className="input-container">
      <label>Username </label>
      <input type="text" onChange={handleChangeUserName} />
      <label htmlFor="standard-adornment-password">
        Password
      </label>
      <input 
       type={password.showPassword ? "text" : "password"}
        onChange={handleChangePassword}
        value={password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {password.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        />
      {data && <h4 className="alert">Username atau Password tidak sesuai</h4>}
      </div>
      <div className="button-container">
      <button type="submit" onClick={login}>
          Log In
        </button>
      </div>
    </form>
   </div>
  );
    
}
