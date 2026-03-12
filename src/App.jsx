import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import DPRForm from "./pages/DPRForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/projects" element={<Projects />} />

      {/* FIXED ROUTE */}
      <Route path="/projects/dpr/:id" element={<DPRForm />} />
    </Routes>
  );
}

export default App;
