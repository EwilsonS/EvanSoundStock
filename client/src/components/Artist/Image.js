import React from "react";

const styles = {
    img: {
        height: "75px",
        width: "75px"
    }
}

const Image = props => <img className="rounded-circle float-left" style={styles.img} src={props.img} alt="artist image" />;

export default Image;
