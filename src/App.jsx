// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/ui/Header";
import Home from "@/pages/Home"; // you’ll create these next
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="pt-24">
        {" "}
        {/* push content below fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
