import React from "react";

const styles = {
  img: {
    width: "300px",
    height: "400px"
  },

  margin: {
    margin: "0px",
    backgroundColor: "white"
  },

  shadow: {
    border: "1px solid",
    boxShadow: "0px 0px 0px #888888"
  }
};

const Carousel = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide carousel-fade"
    data-ride="carousel"
    style={styles.shadow}
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      />
      <li data-target="#div" data-slide-to="1" />
      <li data-target="#carouselExampleIndicators" data-slide-to="2" />
    </ol>
    <div className="carousel-inner">
      <div style={styles.margin} className="carousel-item active text-center">
        <img
          style={styles.img}
          src="https://preview.ibb.co/mM2Bqp/Image_uploaded_from_i_OS.jpg"
          alt="carouselItem"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5 />
          <p />
        </div>
      </div>
      <div style={styles.margin} className="carousel-item text-center">
        <img src="https://image.ibb.co/kUXrrU/musiccc.jpg" alt="carouselItem" />
        <div className="carousel-caption d-none d-md-block">
          <h5>Featured Artist</h5>
          <p>...</p>
        </div>
      </div>
      <div style={styles.margin} className="carousel-item text-center">
        <img
          style={styles.img}
          src="https://preview.ibb.co/dw6qkp/soundcarousel.jpg"
          alt="carouselItem"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Trending Songs</h5>
          <p>...</p>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel