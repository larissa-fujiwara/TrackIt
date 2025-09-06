import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import Today from "./pages/Today";
import Habits from "./pages/Habits";

export default function App() {

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
