import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./css/App.css";
import NavBar from "./components/NavBar";

import TrackList from "./components/TrackList";

function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/joejere/spotify/fvfitapOhOFsOIQG/search?q=${keyword}metroboomin`
    );
    let convertedData = await data.json();
    console.log(convertedData.albums.items);
    setTracks(convertedData.albums.items);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}></Route>
        </Routes>
        <TrackList tracks={tracks} />
      </BrowserRouter>

      {/* <Router>
      <>
        {/*<Login />*
        {/* <NavBar
          keyword={keyword}
          setKeyword={setKeyword}
          getTracks={getTracks}
  />***
        <Routes>
          {/* Route to the login page ***
          <Route path="/login" element={<Login />} />
          {/* Other routes ***
        </Routes>

        <TrackList tracks={tracks} />

        <h1>hq</h1>
      </>
</Router>*/}
    </>
  );
}

export default App;
/*
imports for login page
import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";*/
/*
  logic for login page
  const [loginEmail, setLogInEmail] = useState("");
  const [loginPassword, setLogInPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {};*/
{
  /*<Login
          onLogin={login}
          onLogout={logout}
          setLogInEmail={setLogInEmail}
          setLogInPassword={setLogInPassword}
  />*/
}
