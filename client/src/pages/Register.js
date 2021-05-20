import React, { useContext, useState } from "react";
import { Context } from "../index";
import { registration } from "../http/userApi";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/Const";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Register = observer(() => {
  const {user} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const signIn = async () => {
    try{
      
        let data;
        data = await registration(email, password);
        user.setUser(user);
        user.setIsAuth(true);
        history.push(MAIN_ROUTE);

    } catch (e) {
      alert(e.response.data.message);
    }
  }
  
  return (
    <div className="auth-page">
      <h1 className="title">SIGN IN</h1>
      <input type="text" placeholder="Input your login" value={email} onChange={e => setEmail(e.target.value.substring(0, 27))}/>
      <input type="password" placeholder="Input your password" value={password} onChange={e => setPassword(e.target.value.substring(0, 16))}/>
      <div className="buttons">
        <p>Have account? <a style={{color:"#f39930", cursor:"pointer"}} onClick={() => history.push(LOGIN_ROUTE)}>Login!</a></p>
        <button onClick={signIn} className="big-button">SIGN IN</button>
      </div>
    </div>
  )
});

export default Register;