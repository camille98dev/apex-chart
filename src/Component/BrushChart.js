import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import dummyData from "../dummyData";

const BrushChart = () => {
  const [state, setState] = useState({
    options: {
      xaxis: {
        type: "datetime",
        categories: dummyData.map((data) => data.date),
      },
      annotations: {
        yaxis: [
          {
            y: 405.1, // value of revenue
            borderColor: "#00E396",
            label: {
              borderColor: "#00E396",
              style: {
                color: "#fff",
                background: "#00E396",
              },
              text: "This is Test 1",
            },
          },
          {
            y: 31.8,
            borderColor: "red",
            label: {
              borderColor: "red",
              style: {
                color: "#fff",
                background: "red",
              },
              text: "This is Test 2",
            },
          },
          {
            y: 191.66,
            borderColor: "blue",
            label: {
              borderColor: "blue",
              style: {
                color: "#fff",
                background: "blue",
              },
              text: "This is Test 3",
            },
          },
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: dummyData.map((data) => data.revenue),
      },
    ],
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        width="900"
      />
    </div>
  );
};

export default BrushChart;
