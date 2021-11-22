import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./App.css";

function App() {
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reservationData, setResvationData] = useState([
    {
      reservation_id: 0,
      register_timestamp: "2021-11-21T00:38:42.955Z",
      vaccinated: true,
      owner: {
        name: "string",
        surname: "string",
        birth_date: "2021-11-21",
        citizen_id: "string",
        occupation: "string",
        address: "string",
      },
    },
  ]);
  const [chartData, setChartData] = useState({});

  async function fetchData() {
    const res = await fetch("https://flamxby.herokuapp.com/reservation/");
    res
      .json()
      .then((res) => setResvationData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  const groups = reservationData.reduce((groups, reservation) => {
    const date = reservation.register_timestamp.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reservation);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      reservations: groups[date],
      count: groups[date].filter((res) => res.vaccinated === true).length,
    };
  });

  const chart = () => {
    setChartData({
      labels: groupArrays.map((row) => row.date),
      datasets: [
        {
          label: "reservation amount",
          data: groupArrays.map((row) => row.count),
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData();
    chart();
  }, [loading]);

  if (loading) {
    return (
      <div className="App">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="chart">
        <Line
          data={chartData}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
