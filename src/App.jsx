import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import ProjectDetail from "./ProjectDetail";
import MouseFlow from "./MouseFlow";

function App() {
  return (
    <>
      <MouseFlow />

      <header className="bg-white shadow mb-4">
        <nav className="container mx-auto flex space-x-4 p-4">
          <Link
            to="/"
            className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg transition"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg transition"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg transition"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
