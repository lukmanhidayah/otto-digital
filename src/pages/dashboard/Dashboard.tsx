import Container from "../../components/container/Container";
import { Bar, Line } from "react-chartjs-2";

import "./Dashboard.css";

const Dashboard = () => {
  const data: any = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Penjualan",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Container menuType="dashboard">
      <div className="dashboard-container">
        <div className="content-container chart">
          <div className="chart-content">
            <h3 className="text-sm">Penjualan bulan ini</h3>
            <div className="w-full bg-white">
              <Bar type="VerticalBar" data={data} options={options} />
            </div>
          </div>
          <div className="chart-content">
            <h3 className="text-sm">Grafik Pendapatan</h3>
            <div className="w-full bg-white">
              <Line type="Pendapatan" data={data} options={options} />
            </div>
          </div>
        </div>
        <div className="content-container ringkasan">
          <div className="w-full bg-white">
            <h3 className="text-sm">Ringkasan bulan ini</h3>
            <h4 className="text-xs">Domino's Pizza</h4>
            <div className="grid grid-cols-2 gap-4 mt-2 mb-2">
              <div className="p-2 border rounded-sm text-center">
                <span className="font-light text-sm py-1 px-4 rounded-2xl bg-gray-200">
                  Penjualan
                </span>
                <p className="font-bold text-gray-800 text-5xl m-2">500</p>
              </div>
              <div className="relative p-2 border rounded-sm text-center overflow-hidden">
                <span className="font-light text-sm py-1 px-4 rounded-2xl bg-gray-200">
                  Penjualan
                </span>
                <p className="font-bold text-gray-800 text-5xl md:text-2xl xl:text-4xl m-2">
                  150.000
                </p>
              </div>
              <div className="p-2 border rounded-sm text-center">
                <h5 className="font-light text-sm">Pendapatan</h5>
                <p className="font-bold text-gray-800 text-5xl m-2">142</p>
              </div>
              <div className="p-2 border rounded-sm text-center">
                <h5 className="font-light text-sm">Pendapatan</h5>
                <p className="font-bold text-gray-800 text-5xl m-2">300</p>
              </div>
            </div>
            {/* <Bar type="VerticalBar" data={data} options={options} /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
