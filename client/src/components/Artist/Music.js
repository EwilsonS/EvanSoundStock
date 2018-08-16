import React from "react";

const styles = {
    song: {
        position: "relative",
        width: "260px",
        height: "25px",
        overflow: "hidden",
        marginLeft: "20px"
    },
    controls: {
        position: "absolute",
        top: "-270px",
        left: "-5px"
    }
}
const Music = props => (
  <div style={styles.song}>
    <div style={styles.controls}>
      <iframe
        title="Song Link"
        width="300"
        height="300"
        src={props.src}
      />
    </div>
  </div>
);

export default Music;
