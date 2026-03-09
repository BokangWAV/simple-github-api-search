export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start transition hover:shadow-xl">
      <img
        src={user.avatar_url}
        alt="avatar"
        className="w-28 h-28 rounded-full border-2 border-gray-200"
      />

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">{user.name || user.login}</h2>
        <p className="text-gray-600 mt-2">{user.bio || "No bio available."}</p>

        <div className="flex justify-center md:justify-start gap-8 mt-4 text-gray-700">
          <p><span className="font-semibold">{user.followers}</span> Followers</p>
          <p><span className="font-semibold">{user.following}</span> Following</p>
          <p><span className="font-semibold">{user.public_repos}</span> Repos</p>
        </div>
      </div>
    </div>
  );
}