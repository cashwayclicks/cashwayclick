import React from "react";
import { BrowserRouter as  Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Payment from "./Pages/payment";
import {MyProvider} from "./Pages/resumecontext";

function App() {
  return (
    <div className="App">
    
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
