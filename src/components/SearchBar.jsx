import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-3 mb-12">
      <input
        className="border border-gray-300 rounded-lg px-4 py-3 w-80 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Search
      </button>
    </form>
  );
}