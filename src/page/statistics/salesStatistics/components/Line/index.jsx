import React, { useEffect } from "react";
import * as echarts from "echarts";

const Line = () => {
  useEffect(() => {
    let chartDom = document.getElementById("salesId");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    myChart.setOption(option);
  });
  return <div style={{ width: "60%", height: "100%" }} id="salesId"></div>;
};

export default Line;
