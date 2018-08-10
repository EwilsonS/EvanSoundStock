import React from "react";

const Music = (props) => (
    <audio autoPlay controls>
        <source src={props.src} type="audio/" />
    </audio>
);

export default Music;