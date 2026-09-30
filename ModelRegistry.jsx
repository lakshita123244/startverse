function ModelRegistry() {
  const models = [
    {
      name: "Random Forest",
      version: "v1",
      stage: "Candidate",
      status: "Available",
    },
    {
      name: "XGBoost",
      version: "v1",
      stage: "Candidate",
      status: "Available",
    },
    {
      name: "LightGBM",
      version: "v1",
      stage: "Candidate",
      status: "Available",
    },
    {
      name: "CatBoost",
      version: "v1",
      stage: "Candidate",
      status: "Available",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Model Registry
          </h1>

          <p className="text-slate-500 mt-2">
            Manage machine learning model versions and deployment stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Registered Models
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              4
            </h2>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Model Versions
            </p>
            <h2 className="text-3xl font-bold text-violet-600 mt-2">
              4
            </h2>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Registry
            </p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">
              MLflow
            </h2>
          </div>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-slate-900">
              Registered Models
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Model lifecycle stages can be managed through the registry.
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
                    Version
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Stage
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Status
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Action
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

                    <td className="p-4 text-slate-700">
                      {model.version}
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                        {model.stage}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        {model.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button className="px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-semibold">
                        View
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            Model Lifecycle
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-6">

            <div className="px-5 py-3 rounded-xl bg-slate-100 font-semibold">
              Candidate
            </div>

            <span className="text-slate-400 text-xl">
              →
            </span>

            <div className="px-5 py-3 rounded-xl bg-slate-100 font-semibold">
              Validation
            </div>

            <span className="text-slate-400 text-xl">
              →
            </span>

            <div className="px-5 py-3 rounded-xl bg-slate-100 font-semibold">
              Production
            </div>

            <span className="text-slate-400 text-xl">
              →
            </span>

            <div className="px-5 py-3 rounded-xl bg-slate-100 font-semibold">
              Archived
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ModelRegistry;