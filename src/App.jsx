import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Today from "./pages/Today";
import Habits from "./pages/Habits";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userImg, setUserImg] = useState(localStorage.getItem('userImage'));

  return (
    <UserContext.Provider value={{userImg, setUserImg, token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route element={<HomePage />}>
            <Route path="today" element={<Today />} />
            <Route path="habits" element={<Habits />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
