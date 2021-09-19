import React from "react";
import "./styles.css";

const AppHeader = (props) => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="header-logo">
              <h2 style={{color: "#fff"}}>Logo</h2>
            </div>
          </div>
          <div className="col-md-9">
            <ul className="main-manu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="music.html">Music</a>
              </li>
              <li>
                <a href="dontaion.html">Donation</a>
              </li>
              <li>
                <a href="video.html">Videos</a>
              </li>
              <li>
                <a href="gallery.html">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
