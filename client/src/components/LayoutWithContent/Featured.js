import React from "react";
import API from "../../utils/API";
import "../LayoutWithContent/parallax1.css"


function addToPortfolio(artistId, image){
  // if logged in
  if (localStorage.getItem("id") !== null) {
    // get the user's model from db
    API.getUser(localStorage.getItem("id")).then(res => {
      localStorage.setItem("artistImage", image);
      localStorage.setItem("artistId", artistId);
      API.updateUserArtist(
        localStorage.getItem("id"),
        localStorage.getItem("artistId")
      );
    });
  } else {
    alert("You must be logged in to access this feature");
  }
};
function FeaturedArtists(props) {



  return (

    <div className="row parallax1">
    <div className="col-md-3"></div>
      <div className="col-md-6">
        <br /><br />
        <p className="h4 text-light text-center">Featured Artists</p>
        {/* <br /> */}
        <div>
          {props.artists.map(artist => (artist.name === "tree") ? (
            <div className="card my-3 feature-card" key={artist._id}>
              <div className="">
              <h5 className="text-info">{artist.name}
              </h5>
                <div className="">
                  <div className="">
                    <img className="rounded-circle float-left feature-img" alt="null" src={artist.imageLink} />
                    <div className="float-left">
                      <p className="text-dark float-left">{artist.bio}</p>
                      <p className="text-info">{artist.goal}
                        <br /> Seeking: <strong>${artist.totalPrice}</strong>
                        <br /> For: <strong>{artist.availablePercentage}% </strong> of total album sales
                        </p>
                    </div>
                    <div className="">
                      <button
                        className="btn btn-sm btn-danger right p-1 m-2 d-inline bd-highlight float-right rounded-0"
                        value={artist._id}
                        onClick={() => addToPortfolio(artist._id, artist.imageLink)}
                      >Add to portfolio</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>) : (null)
          )}
        </div>
        <br /><br />
      </div>
      <div className="col-md-3"></div>

    </div>
  )
}

export default FeaturedArtists;