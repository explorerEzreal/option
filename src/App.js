import SiderDemo from "./root/siderDemo/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./page/login";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [userPhone, setUserPhone] = useState();
  const onUserSumbit = (value) => {
    setUserPhone(value.userPhone);
    setIsLogin(true);
  };

  useEffect(() => {
    console.log(pathname);
    if (pathname.split("/")[1] === "login") {
      setIsLogin(false);
      return;
    }
    if (pathname === "/") {
      navigate("/login");
      return;
    }
    setIsLogin(true);
  }, [pathname]);
  return (
    <div className="App">
      {isLogin && <SiderDemo />}
      <Routes>
        <Route path="/login" element={<Login onChange={onUserSumbit} />} />
      </Routes>
    </div>
  );
}

export default App;
