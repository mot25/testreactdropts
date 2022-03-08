import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Form from "./layout/Form/Form";
import { HeaderProps } from "./component/Header/Header.Props";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          title={[
            { route: "/form", routeru: "Форма" },
            { route: "/color", routeru: "Палитра" },
          ]}
        />
        <Routes>
          <Route path="/form" element={<Form />} />
          {/* <Route path="/Color" element={<Color />} /> */}
          {/* <Route path="/*" element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
