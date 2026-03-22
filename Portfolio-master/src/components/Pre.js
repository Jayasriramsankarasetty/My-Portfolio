import React from "react";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}><img src="pre.svg" alt="preloader" className="img-fluid" /></div>;
}

export default Pre;
