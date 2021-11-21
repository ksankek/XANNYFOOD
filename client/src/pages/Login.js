import React, {useState, useContext} from "react";
import { Context } from "../index";
import { login } from "../http/userApi";
import {REGISTRATION_ROUTE, MAIN_ROUTE} from "../utils/Const";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Login = observer(() => {
  const {user} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const logIn = async () => {
    try{
        let data;
        data = await login(email, password);
        user.setUser(user);
        user.setIsAuth(true);
        history.push(MAIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  }  
  return (
    <div className="auth-page">
      <h1 className="title">Вход</h1>
      <input type="text" placeholder="Введите ваш логин" value={email} onChange={e => setEmail(e.target.value.substring(0, 27))}/>
      <input type="password" placeholder="Введите ваш пароль" value={password} onChange={e => setPassword(e.target.value.substring(0, 16))}/>
      <div className="buttons">
        <p>Нет аккаунта? <a style={{color:"#f39930", cursor:"pointer"}} onClick={() => history.push(REGISTRATION_ROUTE)}>Зарегистрируйтесь!</a></p>
        <button onClick={logIn} className="big-button">Войти</button>
      </div>
    </div>
  )
});

export default Login;
