import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Season1 from "./pages/Season1";
import Trailer from "./pages/Trailer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/season1" element={<Season1 />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
