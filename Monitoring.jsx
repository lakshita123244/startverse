function Monitoring() {
  const metrics = [
    {
      title: "API Status",
      value: "Online",
      description: "FastAPI prediction service",
    },
    {
      title: "Model Status",
      value: "Ready",
      description: "Active prediction model",
    },
    {
      title: "Prediction Requests",
      value: "0",
      description: "Requests monitored",
    },
    {
      title: "Drift Status",
      value: "Not Checked",
      description: "Production data monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Monitoring
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor model, API and production performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="bg-white rounded-2xl border shadow-sm p-6"
            >
              <p className="text-sm text-slate-500">
                {metric.title}
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                {metric.value}
              </h2>

              <p className="text-xs text-slate-400 mt-2">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Model Performance
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Prediction Service
                  </span>

                  <span className="font-semibold text-green-600">
                    Active
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full mt-2">
                  <div
                    className="h-3 bg-green-500 rounded-full"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Model Availability
                  </span>

                  <span className="font-semibold text-violet-600">
                    Ready
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full mt-2">
                  <div
                    className="h-3 bg-violet-500 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Monitoring Components
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">
                  API Monitoring
                </span>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  Active
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">
                  Model Monitoring
                </span>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  Active
                </span>
              </div>

              <div className="flex justify-between items-center border-b pb-4">
                <span className="font-medium">
                  Data Drift
                </span>

                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                  Pending
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium">
                  Retraining
                </span>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold">
                  Ready
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            MLOps Monitoring Flow
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-6">

            {[
              "API",
              "Prediction",
              "Model",
              "Metrics",
              "Drift",
              "Retraining",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="px-4 py-3 rounded-xl bg-slate-100 font-semibold text-slate-700">
                  {item}
                </div>

                {index < 5 && (
                  <span className="text-slate-400 text-xl">
                    →
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Monitoring;