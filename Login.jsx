import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login successful");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        <div className="bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
              S
            </div>
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            StartupVerse
          </h1>

          <p className="text-blue-400 text-lg font-semibold mt-2">
            MLOps Platform
          </p>

          <p className="text-slate-300 mt-6 leading-7">
            A Self-Healing Machine Learning Operations Platform for
            Startup Decision Intelligence.
          </p>

          <div className="mt-10 space-y-4 text-sm text-slate-300">
            <p>✓ Automated ML Lifecycle</p>
            <p>✓ Model Monitoring & Drift Detection</p>
            <p>✓ Automatic Model Retraining</p>
          </div>
        </div>

        <div className="p-10 md:p-14 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">

            <p className="text-blue-600 font-semibold text-sm">
              WELCOME BACK
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              Sign in to StartupVerse
            </h2>

            <p className="text-slate-500 mt-3">
              Manage your machine learning lifecycle.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-blue-600 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
              >
                Sign In
              </button>

            </form>

            <p className="text-center text-xs text-slate-400 mt-8">
              StartupVerse MLOps • Machine Learning Operations
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;