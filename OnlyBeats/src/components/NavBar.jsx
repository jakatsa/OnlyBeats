import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import Banner from "./Banner";

function Navbar({ keyword, setKeyword, getTracks }) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              OnlyBeats
            </a>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              {/*  <form className="d-flex " role="search">*/}
              <input
                value={keyword}
                onChange={(event) => {
                  setKeyword(event.target.value);
                }}
                className="form-control me-2 w-75 searchWidth"
                type="search"
                placeholder="Find Song"
                aria-label="Search"
              ></input>
              <button className="btn " onClick={getTracks}>
                Search
              </button>
              {/*</form>*/}
            </div>
          </div>
        </nav>
      </nav>
      <Banner />
    </div>
  );
}

export default Navbar;
