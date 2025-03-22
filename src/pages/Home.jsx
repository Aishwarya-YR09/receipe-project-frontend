import React from 'react';

export const Home = () => {
  return (
    <div>
      {/* <img src='./image 1.jpg' alt='' width={1515} /> */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image 1.jpg" className="d-block w-100" alt="..." height={690} />
          </div>
          <div className="carousel-item">
            <img src="./image 2.jpeg" className="d-block w-100" alt="..." height={690} />
          </div>
          <div className="carousel-item">
            <img src="./image 3.jpg" className="d-block w-100" alt="..." height={690} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};