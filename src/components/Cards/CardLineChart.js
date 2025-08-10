import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {
  React.useEffect(() => {
    const config = {
      type: "line",
      data: {
        labels: [
          "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet"
        ],
        datasets: [
          {
            label: "Réservations 2025",
            backgroundColor: "#38b2ac",
            borderColor: "#38b2ac",
            data: [50, 60, 80, 70, 90, 100, 120],
            fill: false,
          },
          {
            label: "Réservations 2024",
            backgroundColor: "#805ad5",
            borderColor: "#805ad5",
            data: [30, 50, 65, 55, 70, 85, 95],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Réservations par mois",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              gridLines: {
                display: false,
                color: "rgba(33, 37, 41, 0.3)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              gridLines: {
                color: "rgba(255, 255, 255, 0.15)",
              },
            },
          ],
        },
      },
    };

    const ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Statistiques
            </h6>
            <h2 className="text-white text-xl font-semibold">
              Réservations mensuelles
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
