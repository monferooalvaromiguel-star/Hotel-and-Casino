import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Hotel, Mail, Lock, LogIn } from "lucide-react";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTEsIDE5MSwgMzYsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-4">
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-yellow-600/20 rounded-2xl p-8 shadow-2xl">
          <Link to="/" className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
                <Hotel className="w-7 h-7 text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-yellow-500">Royal Palace</span>
                <span className="text-xs text-yellow-600">Hotel & Casino</span>
              </div>
            </div>
          </Link>

          <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-center mb-8">Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600/60 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border border-yellow-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-600/60 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-yellow-600/30 bg-black/50 text-yellow-600 focus:ring-yellow-600/50"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-5 h-5" />
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link to="/register" className="text-yellow-500 hover:text-yellow-400">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
