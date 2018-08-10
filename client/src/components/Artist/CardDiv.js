import React from "react";
import Progress from "./Progress";
import Music from "./Music";
import Image from "./Image";

const styles = {
  padding: {
    paddingTop: 40,
    marginLeft: 10
  },
  card: {
    marginTop: 50
  }
};

export const CardDiv = (props) => (
  <div className="card" style={styles.card}>
    <h5 className="card-header">Featured: {props.name}</h5>
    <div className="card-body">
      <div className="row">
        <div className="col-md-2">
          <Image img={props.img}/>
        </div>
        <div className="col-md-6">
        {/* added child to this so that we can assaign the this.props.summary that we get from db */}
          <p>{props.bio}</p>
        </div>
        <div className="col-md-4">
          <Music src={props.src}/>
          <div className="row">
            <div className="col-md-10" style={styles.padding}>
              <Progress />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
