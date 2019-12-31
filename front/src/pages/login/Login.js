import React from 'react';
import '../pages.css';
import './login.css';
import Button from '../../components/button/Button';

const Login = () => {
  return (
    <div className=" page page__login">
      <section className="page__login_section">
        <div className="page__login_section_intro">
          <h1>MYRA</h1>
          <p>"The modern, streamlined way of tracking and reporting your patient work."</p>
        </div>
        <form>
          <label for="input__username">USERNAME</label> 
          <input type="text" placeholder="Input your username" id="input__username" required></input>
          <label for="input__password">PASSWORD</label>
          <input type="password" placeholder="Input your password" id="input__password" required></input>
          <div>
            <Button content={"LOGIN"} />
            <a>Forgot your password?</a>
          </div>
        </form>
      </section>
    </div>
  )
};

export default Login;