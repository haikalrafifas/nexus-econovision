const ordersChart = document.getElementById("ordersChart").getContext("2d");
const earningsChart = document.getElementById("earningsChart").getContext("2d");

// Orders Line Chart
new Chart(ordersChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "pertanian",
        data: [30, 35, 25, 45, 35, 40, 45],
        borderColor: "#1a237e",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      },
      {
        label: "Peternakan",
        data: [40, 30, 40, 35, 45, 40, 50],
        borderColor: "#f44336",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        align: "start",
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
          color: "#f0f0f0",
        },
        ticks: {
          stepSize: 20,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

// Earnings Doughnut Chart
new Chart(earningsChart, {
  type: "doughnut",
  data: {
    labels: ["Pertanian", "Perternakan", "Trade"],
    datasets: [
      {
        data: [300, 150, 52],
        backgroundColor: ["#1a237e", "#f44336", "#ffa726"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
    },
  },
});