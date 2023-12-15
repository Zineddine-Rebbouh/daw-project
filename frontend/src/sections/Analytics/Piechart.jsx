import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "pie",
  width: 280,
  height: 280,
  series: [44, 55, 13],

  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "admin",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617", "#ff8f00", "#00897b"],
    legend: {
      show: false,
    },
  },
};

export default function Piechart() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div>
          <Typography variant="h6" color="blue-gray">
            users
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            this chart shows the persentage of the users in our website
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mt-4 flex flex-wrap justify-around px-2">
        <Chart {...chartConfig} />
        <div className="">
          <div className=" mt-4">
            <span className=" inline-block w-6 h-6 bg-[#ff8f00] rounded-full">
              .
            </span>{" "}
            <h1 className=" inline-block font-bold ">admin</h1>
          </div>
          <div className=" mt-4">
          
            <span className=" inline-block w-6 h-6 bg-[#020617]  rounded-full">
              .
            </span>{" "}
            <h1 className=" inline-block font-bold ">doctor</h1>
          </div>
          <div className=" mt-4">
          
            <span className=" inline-block w-6 h-6 bg-[#00897b] rounded-full">
              .
            </span>{" "}
            <h1 className=" inline-block font-bold ">patient</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
