function Experiments() {
  const experiments = [
    {
      id: 1,
      name: "Revenue/Profit Prediction Experiment",
      model: "Random Forest",
      status: "Completed",
      metric: "R²",
      value: "Tracked",
    },
    {
      id: 2,
      name: "Revenue/Profit Prediction Experiment",
      model: "XGBoost",
      status: "Completed",
      metric: "R²",
      value: "Tracked",
    },
    {
      id: 3,
      name: "Revenue/Profit Prediction Experiment",
      model: "LightGBM",
      status: "Completed",
      metric: "R²",
      value: "Tracked",
    },
    {
      id: 4,
      name: "Revenue/Profit Prediction Experiment",
      model: "CatBoost",
      status: "Completed",
      metric: "R²",
      value: "Tracked",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Experiments
          </h1>

          <p className="text-slate-500 mt-2">
            Track machine learning experiments and model runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Experiment
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              StartupVerse ML
            </h2>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Model Runs
            </p>
            <h2 className="text-2xl font-bold text-violet-600 mt-2">
              4
            </h2>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Tracking
            </p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">
              MLflow
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-slate-900">
              Experiment Runs
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-sm text-slate-500">
                    Run
                  </th>
                  <th className="p-4 text-sm text-slate-500">
                    Model
                  </th>
                  <th className="p-4 text-sm text-slate-500">
                    Status
                  </th>
                  <th className="p-4 text-sm text-slate-500">
                    Metric
                  </th>
                  <th className="p-4 text-sm text-slate-500">
                    Tracking
                  </th>
                </tr>
              </thead>

              <tbody>
                {experiments.map((experiment) => (
                  <tr
                    key={experiment.id}
                    className="border-t"
                  >
                    <td className="p-4 font-semibold text-slate-800">
                      Run {experiment.id}
                    </td>

                    <td className="p-4 text-slate-700">
                      {experiment.model}
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        {experiment.status}
                      </span>
                    </td>

                    <td className="p-4 text-slate-700">
                      {experiment.metric}
                    </td>

                    <td className="p-4 text-violet-600 font-semibold">
                      {experiment.value}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            MLflow Tracking
          </h2>

          <p className="text-slate-500 mt-3">
            MLflow is used to track experiments, parameters,
            metrics, artifacts and model versions throughout
            the machine learning lifecycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="font-semibold">Parameters</p>
              <p className="text-sm text-slate-500 mt-1">
                Model configuration
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="font-semibold">Metrics</p>
              <p className="text-sm text-slate-500 mt-1">
                Model performance
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="font-semibold">Artifacts</p>
              <p className="text-sm text-slate-500 mt-1">
                Model files
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="font-semibold">Models</p>
              <p className="text-sm text-slate-500 mt-1">
                Registered models
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Experiments;