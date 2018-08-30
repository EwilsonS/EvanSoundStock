import React from "react";
import Progress from "./Progress";
import Music from "./Music";
import Image from "./Image";
import InvestBtn from "./Invest";

const styles = {
  padding: {
    paddingTop: 40,
    marginLeft: 10
  },
  card: {
    marginTop: 50
  },

  invest: {
    paddingLeft: 140,
    paddingTop: 30
  }
};

const CardDiv = (props) => (
  <div className="card my-3 rounded-0" style={styles.card}>
    <h5 className="card-header rounded-0"  >Featured: {props.name}
    </h5>
    <div className="card-body rounded-0">
      <div className="">
        <div className="">
          <Image  img={props.img}/>
        <div className="float-left">
          <p>{props.bio}</p>
        </div>
        <div className="float-right">
              <InvestBtn />
        </div>
        </div>
      </div>
    </div>
    <Progress />
  </div>
);

export default CardDiv