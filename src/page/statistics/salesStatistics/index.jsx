import React from "react";
// import { useEffect } from "react";
import TitleBox from "./components/TitleBox";
import Bar from "./components/Bar";
import Link from "./components/Link";
import Pie from "./components/Pei";
import Salesbar from "./components/SalesBar";
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
      {/* <div className="sales-head">
        {statisticsInfo?.map((item) => {
          return <TitleBox key={item.id} statisticsInfo={item} />;
        })}
      </div> */}
      <div className="sales-body">
        <div className="sales-body-left">
          <Bar />
        </div>
        <div className="sales-body-right">
          <Pie />
        </div>
      </div>
      <div className="sales-footer">
        <Salesbar />
      </div>
    </div>
  );
};

export default SalesStatistics;
