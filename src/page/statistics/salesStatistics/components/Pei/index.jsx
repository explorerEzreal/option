import React, { useEffect } from "react";
import * as echarts from "echarts";

const Pie = () => {
  useEffect(() => {
    let chartDom = document.getElementById("pie");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      tooltip: {
        show: false,
        trigger: "item",
      },
      legend: {
        orient: "horizontal",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "Search Engine" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    myChart.setOption(option);
  });
  return <div style={{ width: "85%", height: "100%" }} id="pie"></div>;
};

export default Pie;
