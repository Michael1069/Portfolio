import React from "react";
import Portfolio from "./Portfolio.jsx";
import MatrixBackground from "./MatrixBackground.jsx";
import KatanaSlash from "./KatanaSlash.jsx";
import KatanaSlice from "./components/KatanaSlice";

function App() {
  return (
    <div>
      <MatrixBackground />
      <Portfolio />
      <KatanaSlash /> {/* Katana effect always on top */}
      <KatanaSlice />

    </div>
  );
}

export default App;
