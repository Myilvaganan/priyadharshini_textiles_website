import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

export default function AdminLogin() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(username, password);
    if (!ok) setError("Incorrect username or password.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-6 py-16">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex justify-center">
          <Logo dark />
        </div>
        <h1 className="mt-6 text-center font-serif text-xl font-bold text-brand-dark">
          Content Management Login
        </h1>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-brand-dark">Username</label>
            <input
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-brand-dark">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-brand-dark/15 px-4 py-2.5 text-sm outline-none transition-colors duration-200 focus:border-brand-gold"
            />
          </div>
          {error && <p className="text-sm font-medium text-red-600">{error}</p>}
          <Button type="submit" variant="primary" className="w-full">
            Log In
          </Button>
        </form>
        <Link
          to="/"
          className="mt-6 block text-center text-sm font-medium text-brand-gray transition-colors hover:text-brand-gold"
        >
          &larr; Back to site
        </Link>
      </div>
    </div>
  );
}
