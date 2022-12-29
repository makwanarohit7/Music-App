import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Private from "./components/Private";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Routes>
          <Route
            path="/*"
            element={
              <Private>
                <MainPage />
              </Private>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
