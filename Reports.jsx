function Reports() {
  const reports = [
    {
      title: "Model Performance Report",
      description: "Summary of model evaluation, prediction performance and selected model.",
      status: "Ready",
    },
    {
      title: "MLOps Lifecycle Report",
      description: "Overview of data validation, versioning, training, deployment and monitoring.",
      status: "Ready",
    },
    {
      title: "Drift Monitoring Report",
      description: "Summary of feature drift monitoring and retraining status.",
      status: "Monitoring",
    },
    {
      title: "Business Prediction Report",
      description: "Business inputs, predicted future profit and decision-support insights.",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Reports
          </h1>
          <p className="text-slate-500 mt-2">
            View and manage StartupVerse MLOps reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report) => (
            <div
              key={report.title}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    {report.title}
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    {report.description}
                  </p>
                </div>

                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                  {report.status}
                </span>
              </div>

              <button
                className="mt-6 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:bg-slate-700"
                onClick={() =>
                  alert(`${report.title} is currently a frontend report module.`)
                }
              >
                View Report
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Report Generation Flow
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
            <span className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700">
              Dataset
            </span>

            <span>→</span>

            <span className="px-4 py-2 rounded-lg bg-purple-50 text-purple-700">
              Model
            </span>

            <span>→</span>

            <span className="px-4 py-2 rounded-lg bg-green-50 text-green-700">
              Prediction
            </span>

            <span>→</span>

            <span className="px-4 py-2 rounded-lg bg-orange-50 text-orange-700">
              Monitoring
            </span>

            <span>→</span>

            <span className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700">
              Report
            </span>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-semibold text-amber-900">
            Integration Status
          </h3>

          <p className="text-sm text-amber-800 mt-2">
            Report pages are currently connected to the frontend UI.
            Actual MLflow, monitoring, drift and backend report data will be
            connected during backend integration.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Reports;