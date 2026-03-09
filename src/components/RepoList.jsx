import { Star } from "lucide-react"

export default function RepoList({ repos }) {
  return (
    <div className="h-screen w-screen items-center justify-center bg-white rounded-xl shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Repositories</h2>
      <div className="grid gap-4">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-200 hover:bg-gray-50 rounded transition"
          >
            <div>
              <h3 className="font-semibold text-gray-800">{repo.name}</h3>
              <p className="text-gray-500 text-sm">{repo.language || "N/A"}</p>
            </div>
            <div className="flex gap-6 mt-2 md:mt-0 items-center text-gray-700">
              <span>⭐ {repo.stargazers_count}</span>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}