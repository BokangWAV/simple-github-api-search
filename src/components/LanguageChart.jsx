import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function LanguageChart({ repos }) {

  const languages = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] =
        (languages[repo.language] || 0) + 1;
    }
  });

  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        label: "Languages",
        data: Object.values(languages),
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6"
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12 w-full md:w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">
        Language Distribution
      </h2>
      <Pie data={data} />
    </div>
  );
}