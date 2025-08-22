import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Home from "./components/Home";
import Admin from "./components/Admin/Admin.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {!isLoading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
