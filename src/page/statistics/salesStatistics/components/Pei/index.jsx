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
            { value: 1048, name: "空调器具" },
            { value: 735, name: "制冷器具" },
            { value: 580, name: "清洁器具" },
            { value: 484, name: "取暖器具" },
            { value: 300, name: "数码电子" },
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
