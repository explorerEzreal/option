import React from "react";
// import { useEffect } from "react";
import TitleBox from "./components/TitleBox";
import Line from "./components/Line";
import "./style.css";

const statisticsInfo = [
  {
    id: "1",
    title: "销售数量",
    nums: 12,
  },
  {
    id: "2",
    title: "销售数量",
    nums: 12,
  },
  {
    id: "3",
    title: "销售数量",
    nums: 12,
  },
  {
    id: "4",
    title: "销售数量",
    nums: 12,
  },
];

const SalesStatistics = () => {
  return (
    <div className="c--sales">
      <div className="sales-head">
        {statisticsInfo?.map((item) => {
          return <TitleBox key={item.id} statisticsInfo={item} />;
        })}
      </div>
      <div className="sales-body">
        <div className="sales-body-left">
          <Line />
        </div>
        <div className="sales-body-right">right</div>
      </div>
      <div className="sales-footer">11</div>
    </div>
  );
};

export default SalesStatistics;
