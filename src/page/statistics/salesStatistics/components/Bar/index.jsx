import React, { useEffect } from "react";
import * as echarts from "echarts";

const Bar = () => {
  useEffect(() => {
    let chartDom = document.getElementById("salesId");
    let myChart = echarts.init(chartDom);
    let option;
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["一月", "二月", "三月", "四月"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "空调器具",
          type: "bar",
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "制冷器具",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "清洁器具",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "取暖器具",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "数码电子",
          type: "bar",
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          emphasis: {
            focus: "series",
          },
          markLine: {
            lineStyle: {
              type: "dashed",
            },
            data: [[{ type: "min" }, { type: "max" }]],
          },
        },
      ],
    };
    myChart.setOption(option);
  });
  return <div style={{ width: "85%", height: "100%" }} id="salesId"></div>;
};

export default Bar;
