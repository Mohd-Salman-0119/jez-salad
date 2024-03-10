import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Menu from "./components/Menu";
import React from "react";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="lg:px-10 xl:px-24 md:px-6 px-3">
        <Hero />
        <Menu />
      </div>
    </div>
  );
};

export default App;
