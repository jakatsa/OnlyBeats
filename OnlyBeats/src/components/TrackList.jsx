import React from "react";

function TrackList({ tracks }) {
  return (
    <div
      className="container bg-dark"
      style={{ backgroundColor: "black", marginTop: "50px" }}
    >
      <div className="row">
        {tracks.map((element) => (
          <div key={element} className="col-lg-3 col-md-6 py-2">
            <div className="card">
              <img
                src={element.images[0].url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark text-white">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">producer: {element.artists[0].name}</p>
                <p className="card-text">ksh.120</p>
                <audio src={"hhh"} controls className="w-100"></audio>{" "}
                {/*no preview url so can't play*/}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrackList;
