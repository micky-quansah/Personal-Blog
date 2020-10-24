import React, {useState} from 'react';
import './Form.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function Form(props) {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState({value:""});
  const [password, setPassword] = useState({value:""});

  console.log(props.menuVisibility)

  function handleSubmit(event) {
    event.preventDefault();
    if(name.value==="premest"&&password.value==="happycoding"){
      alert("log-in was successful");
      props.logged(true)
    } else {
      alert("log-in unsuccessful");
    }
  }

  function handlePassword(e) {
    setPassword({value: e.target.value})
  }

  function handleName(e) {
    setName({value: e.target.value})
  }

  return (
    <section id='form-section'>
      <div className="formContainer">
      <h1 id="signin" > Log In</h1>
      <form className='hform' onSubmit={handleSubmit}>
        <label title="name">
          <input id="name" value={name.value} name="name" className='input input-text' type="text" placeholder="Name" onChange={handleName} required/><br />
        </label>
        <label title="name">
          <input className='input input-text' name="password" value={password.value} type="password" placeholder="Password" onChange={handlePassword} required/><br />
        </label>
        <input id="submitform" type="submit" value="Submit" onClick={handleSubmit} onMouseDown={props.handleMouseDown} />
      </form>

      </div>
    </section>
  );

}

export default Form;