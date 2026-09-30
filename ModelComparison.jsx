function ModelComparison() {
  const models = [
    {
      name: "Random Forest",
      type: "Ensemble",
      status: "Available",
    },
    {
      name: "XGBoost",
      type: "Gradient Boosting",
      status: "Available",
    },
    {
      name: "LightGBM",
      type: "Gradient Boosting",
      status: "Available",
    },
    {
      name: "CatBoost",
      type: "Gradient Boosting",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Model Comparison
          </h1>

          <p className="text-slate-500 mt-2">
            Compare machine learning models used in the StartupVerse
            prediction pipeline.
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-slate-900">
              Candidate Models
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Performance metrics will be populated from the MLflow
              experiment results.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-sm text-slate-500">
                    Model
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Algorithm
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    RMSE
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    MAE
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    R²
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                {models.map((model) => (
                  <tr
                    key={model.name}
                    className="border-t"
                  >

                    <td className="p-4 font-semibold text-slate-900">
                      {model.name}
                    </td>

                    <td className="p-4 text-slate-600">
                      {model.type}
                    </td>

                    <td className="p-4 text-slate-400">
                      —
                    </td>

                    <td className="p-4 text-slate-400">
                      —
                    </td>

                    <td className="p-4 text-slate-400">
                      —
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                        {model.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Evaluation Metrics
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-2">
              RMSE · MAE · R²
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Used to evaluate regression model performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Experiment Tracking
            </p>

            <h2 className="text-xl font-bold text-violet-600 mt-2">
              MLflow
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Stores model parameters, metrics and artifacts.
            </p>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Model Selection
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-2">
              Best Model
            </h2>

            <p className="text-sm text-slate-500 mt-2">
              Selected after evaluating trained model results.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ModelComparison;