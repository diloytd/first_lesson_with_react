import { Chart } from "react-google-charts";

  
  export function MakePie() {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 6],
        ["Eat", 2],
        ["Commute", 1],
        ["Study", 3],
        ["Sleep", 4],
        ["Work-out", 1]
      ];
      const options = {
        title: "My Daily Activities",
      };
    return (
      <div>
         <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      </div>
    );
  }