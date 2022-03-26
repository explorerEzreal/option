import React from "react";
import "./style.css";
const TitleBox = ({ statisticsInfo }) => {
  return (
    <div className="sales-head-item">
      <div className="item-content">
        <div className="content-leftbox">
          <div className="leftbox-tips">{statisticsInfo.nums}</div>
          <div className="leftbox-title">{statisticsInfo.title}</div>
        </div>
        <div className="content-rightbox">right</div>
      </div>
    </div>
  );
};

export default TitleBox;
