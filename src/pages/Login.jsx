import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "123456") {
      setError("");
      navigate("/projects");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Construction App Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-black px-3 py-2.5 transition-colors duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-black px-3 py-2.5 transition-colors duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-xl border border-black bg-black px-3 py-2.5 text-white transition-colors duration-200 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Test: test@test.com / 123456
        </p>
      </div>
    </div>
  );
}
