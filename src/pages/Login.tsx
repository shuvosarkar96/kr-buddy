import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Invalid email or password.");
    } else {
      navigate("/admin");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-black mb-3">
          Admin Login
        </h1>

        <p className="text-gray-600 mb-8">
          Sign in to access the dashboard.
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5 bg-white border border-gray-200 rounded-xl p-6"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default Login;