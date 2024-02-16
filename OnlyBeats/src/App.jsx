import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Login from "./components/Login";
import "./css/App.css";

function App() {
  const [keyword, setKeyword] = useState("");
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/joejere/spotify/fvfitapOhOFsOIQG/search?q=${keyword}daku`
    );
    let convertedData = await data.json();
    console.log(convertedData.albums.items);
    setTracks(convertedData.albums.items);
  };
  return (
    <>
      <div>{/*<Login />*/}</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            OnlyBeats
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*   <form className="d-flex" role="search">*/}
            <input
              value={keyword}
              onChange={(event) => {
                setKeyword(event.target.value);
              }}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" onClick={getTracks}>
              Search
            </button>
            {/* </form>*/}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container bg-dark " style={{ backgroundColor: "black" }}>
        <div className="row">
          {tracks.map((element) => {
            return (
              <div key={element} className="col-lg-3 col-md-6 py-2">
                <div className="card">
                  <img
                    src={element.images[0].url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body bg-dark text-white">
                    <h5 className="card-title ">{element.name}</h5>
                    <p className="card-text">
                      producer:{element.artists[0].name}
                    </p>
                    <p className="card-text">ksh.120</p>
                    <audio
                      src={
                        "https://soundcloud.com/ozunapr/ozuna-david-guetta-vocation"
                      }
                      controls
                      className="w-100"
                    ></audio>{" "}
                    {/*no preview url so cant play*/}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
