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
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md sm:p-8 lg:p-10">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Construction App Login
          </h2>

          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-xl bg-black px-4 py-3 text-sm text-white transition hover:bg-gray-950 sm:text-base"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
            Test: test@test.com / 123456
          </p>
        </div>
      </div>
    </div>
  );
}
