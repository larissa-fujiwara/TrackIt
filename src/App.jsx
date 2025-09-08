import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Today from "./pages/Today";
import Habits from "./pages/Habits";
import { useState } from "react";

export default function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage setToken={setToken} />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route element={<HomePage />}>
          <Route path="today" element={<Today token={token} />} />
          <Route path="habits" element={<Habits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
