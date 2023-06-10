import { useRouter } from "next/router";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "") {
      router.push(`/form/${username}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Homepage</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-lg font-bold text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
