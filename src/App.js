import React from "react";
import "./App.css";
import { AppBar, Footer, NavigationMenu, Page } from "./Main/index";

function App() {
  return (
    <div className="App">
      <AppBar />
      <NavigationMenu />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
