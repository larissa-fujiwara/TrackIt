import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Today from "./components/Today";
import Habits from "./components/Habits";
import { useNavigate } from "react-router";

export default function App() {

  /* const navigate = useNavigate(); */

  return (
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
  )
}
