import React from "react";

import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotfound from "./pages/PageNotfound";
//import CardLoading from "./components/CardLoading";

const App: React.FC = () => {
  // const [count, setCount] = useState(0)
  const title = "Home";
  document.title = `News APP | ` + title;

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/404" element={<PageNotfound />} />

        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
};

export default App;

//TODO 1. mempelajari dasar dari react ts [status: progress]
//TODO 2. membuat struktur folder sesui rekrutmen
//TODO 3. mulai kerjakan
