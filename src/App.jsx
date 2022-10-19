import "./App.css";
import HomePage from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditingPage from "./pages/edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit-task/:id" element={<EditingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
