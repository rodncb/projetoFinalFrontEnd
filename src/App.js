import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/Search";
import { ROUTES } from "./utils/constants";
import "./App.css";

function App() {
  return (
    <Router basename="/projetoFinalFrontEnd">
      <div className="App">
        <Header />
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
