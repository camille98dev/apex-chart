import React from "react";
import ReactApexChart from "react-apexcharts";
import dummyData from "../dummyData";

const BrushChart = () => {
  const arrayOfDate = dummyData.map((data) => data.date);
  const arrayOfRevenue = dummyData.map((data) => data.revenue);
  const state = {
    options: {
      chart: {
        id: "chart1",
        type: "line",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      xaxis: {
        type: "datetime",
        categories: arrayOfDate,
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
        data: arrayOfRevenue,
      },
    ],
    seriesLine: [
      {
        data: arrayOfRevenue,
      },
    ],
    optionsLine: {
      chart: {
        id: "chart2",
        type: "area",
        brush: {
          target: "chart1",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("1 Aug 2022").getTime(),
            max: new Date("10 Aug 2022").getTime(),
          },
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
        categories: arrayOfDate,
      },
    },
  };

  return (
    <div>
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          width="900"
          height="300"
        />
      </div>
      <div>
        <ReactApexChart
          options={state.optionsLine}
          series={state.seriesLine}
          type="area"
          width="900"
          height="300"
        />
      </div>
    </div>
  );
};

export default BrushChart;
