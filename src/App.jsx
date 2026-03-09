import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import LanguageChart from "./components/LanguageChart";
import RepoList from "./components/RepoList";
import { getUser, getRepos } from "./services/githubApi";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUser = async (username) => {
    const userData = await getUser(username);
    const repoData = await getRepos(username);

    setUser(userData);
    setRepos(repoData);
  };

  return (
    <div className="flex-row h-screen w-screen items-center justify-center bg-gray-100 p-6 md:p-12 font-sans items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          GitHub Developer Dashboard
      </h1>
      <SearchBar onSearch={searchUser} />
      {user && <ProfileCard user={user} />}
      {repos.length > 0 && <LanguageChart repos={repos} />} 
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;