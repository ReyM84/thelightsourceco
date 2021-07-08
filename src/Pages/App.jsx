import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "../Routes";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;
