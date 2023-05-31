import React, { Component } from "react";
import NameQuote from "./Components/NameQuote";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardCustomisation from "./Components/BoardCustomisation";
import FuncQuote from "./Components/FuncQuote";
import WiFiQuote from "./Components/WiFiQuote";
import VoiceQuote from "./Components/VoiceQuote";
import Complete from "./Components/Complete";

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NameQuote />} />
            <Route path="/order/quote" element={<NameQuote />} />
            <Route path="/order/board" element={<BoardCustomisation />} />            
            <Route path="/order/function" element={<FuncQuote />} />
            <Route path="/order/wifi" element={<WiFiQuote />} />
            <Route path="/order/voice" element={<VoiceQuote />} />
            <Route path="/order/complete" element={<Complete />} />
          </Routes>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
