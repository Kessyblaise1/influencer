import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";

// Screens
import Editprofile from "./screens/EditProfile";
import GuestScreen from "./screens/GuestScreen";
import Infoform from "./screens/InfoForm";
import Login from "./screens/Login";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<GuestScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/influencer-info" element={<Infoform />} />
            <Route path="/profile" element={<Editprofile />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
