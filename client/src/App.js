import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./reset.css";
import "./style.css";
import "./assets/fonts/fonts.css"
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap"

const App = observer(() => {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuth(!!data);
     }).finally( () => setLoading(false));
  }, [user])

  if(loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
});

export default App;
