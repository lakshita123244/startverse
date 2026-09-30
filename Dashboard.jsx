import { Link } from "react-router-dom";

function Dashboard() {
  const menuItems = [
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/datasets", icon: "📁", label: "Dataset Upload" },
    { path: "/pipeline", icon: "🔄", label: "Data Pipeline" },
    { path: "/experiments", icon: "🧪", label: "Experiments" },
    { path: "/models", icon: "🤖", label: "Model Comparison" },
    { path: "/registry", icon: "📦", label: "Model Registry" },
    { path: "/prediction", icon: "🔮", label: "Prediction" },
    { path: "/analytics", icon: "📈", label: "Business Analytics" },
    { path: "/guardian", icon: "🧠", label: "Decision Guardian" },
    { path: "/monitoring", icon: "📡", label: "Monitoring" },
    { path: "/drift", icon: "⚠️", label: "Drift Detection" },
    { path: "/reports", icon: "📄", label: "Reports" },
    { path: "/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      <header className="h-16 bg-white border-b flex items-center justify-between px-6">

        <div>
          <h1 className="text-xl font-bold text-violet-700">
            StartupVerse
          </h1>

          <p className="text-xs text-slate-500">
            MLOps Platform
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span className="text-xl">
            🔔
          </span>

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
              L
            </div>

            <span className="font-medium text-slate-700">
              Lakshita
            </span>

          </div>

        </div>

      </header>

      <div className="flex">

        <aside className="w-64 min-h-[calc(100vh-64px)] bg-slate-950 text-white p-5">

          <div className="mb-8">

            <h2 className="text-xl font-bold">
              StartupVerse
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              MLOps Platform
            </p>

          </div>

          <nav className="space-y-2">

            {menuItems.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-lg transition ${
                  item.path === "/dashboard"
                    ? "bg-violet-600"
                    : "hover:bg-slate-800"
                }`}
              >

                {item.icon} {item.label}

              </Link>

            ))}

          </nav>

        </aside>

        <main className="flex-1 p-8">

          <div className="mb-8">

            <h1 className="text-3xl font-bold text-slate-900">
              Dashboard
            </h1>

            <p className="text-slate-500 mt-1">
              Monitor your StartupVerse MLOps lifecycle.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-sm border">

              <p className="text-sm text-slate-500">
                Total Datasets
              </p>

              <h2 className="text-3xl font-bold mt-2">
                0
              </h2>

              <p className="text-sm text-slate-400 mt-2">
                Uploaded datasets
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">

              <p className="text-sm text-slate-500">
                Active Model
              </p>

              <h2 className="text-3xl font-bold mt-2">
                v1
              </h2>

              <p className="text-sm text-violet-600 mt-2">
                Revenue Prediction
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">

              <p className="text-sm text-slate-500">
                Model Status
              </p>

              <h2 className="text-3xl font-bold mt-2 text-green-600">
                Ready
              </h2>

              <p className="text-sm text-slate-400 mt-2">
                Awaiting backend
              </p>

            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">

              <p className="text-sm text-slate-500">
                Drift Status
              </p>

              <h2 className="text-3xl font-bold mt-2 text-slate-600">
                N/A
              </h2>

              <p className="text-sm text-slate-400 mt-2">
                Monitoring not connected
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2 bg-white rounded-xl p-6 shadow-sm border">

              <h2 className="text-lg font-bold text-slate-900">
                Revenue Prediction
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Revenue prediction activity will appear here.
              </p>

              <div className="h-64 flex items-center justify-center">

                <p className="text-slate-400">
                  No prediction data available
                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border">

              <h2 className="text-lg font-bold">
                MLOps Lifecycle
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3">
                  <span className="text-green-600">✓</span>
                  <span>Data Validation</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Dataset Versioning</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Model Training</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Model Deployment</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Monitoring</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Drift Detection</span>
                </div>

                <div className="flex items-center gap-3">
                  <span>○</span>
                  <span>Retraining</span>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;