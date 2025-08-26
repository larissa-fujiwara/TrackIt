import { BrowserRouter, Route, Routes } from "react-router";
import HabitsPage from "./pages/HabitsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/habits' element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
