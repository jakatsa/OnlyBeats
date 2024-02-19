import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import TrackList from "./components/TrackList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/joejere/spotify/fvfitapOhOFsOIQG/search?q=${keyword}drake`
    );
    let convertedData = await data.json();
    console.log(convertedData.albums.items);
    setTracks(convertedData.albums.items);
  };

  const redirectToNavBar = () => {
    // Redirect to NavBar component
    window.location.href = "/NavBar";
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
