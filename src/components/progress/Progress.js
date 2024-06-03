import React from "react";
// import "react-tooltip/dist/react-tooltip.css";
import "./Progress.css";
// import { Tooltip } from "react-tooltip";

const Progressbar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    // borderRadius: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    position: "relative",
  };

  const progresstext = {
    padding: 0,
    margin: 0,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className="col-sm-12">
      <p
        className="progress-head pb-3"
        data-tooltip="Tooltip help here!"
        data-flow="right"
        style={progresstext}
      >
        <strong>Your Process: {`${progress}%`}</strong>
      </p>
      <div className="progress-wrapper" id="myProgress" style={Parentdiv}>
        <a data-tooltip-id="my-tooltip" data-tooltip-content={`${progress}%`}>
          <div style={Childdiv}>
            <span className="pro_no_css">{`${progress}%`}</span>
          </div>
          {/* <div className="pro_no_css">{`${progress}%`}</div> */}
        </a>

        {/* <Tooltip id="my-tooltip" place="bottom" /> */}
      </div>
    </div>
  );
};

export default Progressbar;
