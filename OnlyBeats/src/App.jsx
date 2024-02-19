import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import TrackList from "./components/TrackList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);
  const [theme, setTheme] = useState("light"); // Default theme is light

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/kikirika/spotify/iXXnopwfqzXCuuCn/search?q=daku&type=track`
    );
    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle between light and dark
  };

  const redirectToNavBar = () => {
    // Redirect to NavBar component
    window.location.href = "/NavBar";
  };

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        {/* Apply theme-specific styles */}
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Routes>
          <Route
            path="/"
            element={<Login redirectToNavBar={redirectToNavBar} />}
          />
          <Route
            path="/NavBar"
            element={
              <NavBar
                keyword={keyword}
                setKeyword={setKeyword}
                getTracks={getTracks}
              />
            }
          />
        </Routes>
        <TrackList tracks={tracks} />
      </div>
    </BrowserRouter>
  );
}

export default App;
