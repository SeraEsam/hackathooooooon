const ctx1 = document.getElementById("chart-1").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: ["CO2", "Smoke", "temp", "Gas"],
    datasets: [
      {
        label: "Baghdad",
        data: [2, 1, 4, 3],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(0, 128, 130, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            const labels = ['Bad', 'Medium', 'Good', 'Exellent'];
            return labels[value - 1];
          },
          stepSize: 1, 
          min: 1,
          max: 4
        }
      }
    }
  }
});

const ctx2 = document.getElementById("chart-2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["CO2", "Smoke", "temp", "Gas"],
    datasets: [
      {
        label: "Basrah",
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(0, 128, 130, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            const labels = ['Bad', 'Medium', 'Good', 'Exellent'];
            return labels[value - 1];
          },
          stepSize: 1, 
          min: 1,
          max: 4
        }
      }
    }
  }
});


