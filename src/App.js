import Main from "./pages/Main";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route, Link, NavLink, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
