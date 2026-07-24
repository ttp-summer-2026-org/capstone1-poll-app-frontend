import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreatePoll from "./pages/CreatePoll";
import Poll from "./pages/Poll";
import Results from "./pages/Results";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePoll />} />
                <Route path="/poll/:id" element={<Poll />} />
                <Route path="/poll/:id/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
