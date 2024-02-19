import React from "react";
import "../css/Banner.css";
const Banner = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      {/*caard images*/}
      <div className="cream-bg">
        <div className="container">
          <div className="row g-5 justify-content-evenly">
            <div className="lg-6">
              <div className="card">
                <div className="row g-0">
                  <div className="col-6 col-md-5 banner">
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title">
                        Kickstart your music career today
                      </h3>

                      <p className="card-text">
                        <img
                          src="https://www.beatstars.com/assets/img/landing-page/icons/icon-check-green.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <strong>
                          Check The largest marketplace for high quality beats
                        </strong>
                        <br></br>
                        <br></br>
                        Access over 8 million beats from our growing community
                        of producers around the world.
                      </p>
                      <p className="card-text">
                        <img
                          src="https://www.beatstars.com/assets/img/landing-page/icons/icon-check-green.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <strong>Seamless purchasing experience</strong>
                        <br></br>
                        We keep it effortless. Browse your favorite genres and
                        purchase with ease - all within one platform.
                      </p>
                      <p className="card-text">
                        <img
                          src="https://www.beatstars.com/assets/img/landing-page/icons/icon-check-green.svg"
                          style={{ marginRight: "20px" }}
                        />
                        <strong>A community that understands you</strong>
                        <br></br>
                        We’re creators just like you. Whether you need our
                        support team or want to collaborate with like-minded
                        creatives, there’s a home for you.
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-7">
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lkzYHMjIhcgE9TGtr_ZGUgHaEK%26pid%3DApi&f=1&ipt=302d2de920b868fe6baf23cb810105a812d801f95060c8d8835777ee0eac9803&ipo=images"
                      className="card-img img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
