function Drift() {
  const features = [
    {
      name: "Monthly Revenue",
      baseline: "Stable",
      current: "Stable",
      status: "No Drift",
    },
    {
      name: "Monthly Expenses",
      baseline: "Stable",
      current: "Stable",
      status: "No Drift",
    },
    {
      name: "Customer Retention",
      baseline: "Stable",
      current: "Stable",
      status: "No Drift",
    },
    {
      name: "Marketing Budget",
      baseline: "Stable",
      current: "Stable",
      status: "No Drift",
    },
    {
      name: "Market Growth Rate",
      baseline: "Stable",
      current: "Stable",
      status: "No Drift",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Drift Detection
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor changes between training data and production data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Drift Status
            </p>

            <h2 className="text-2xl font-bold text-green-600 mt-2">
              No Drift
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              Current monitoring state
            </p>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Features Checked
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              5
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              Business features
            </p>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Drift Engine
            </p>

            <h2 className="text-2xl font-bold text-violet-600 mt-2">
              Evidently
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              Planned monitoring component
            </p>
          </div>

        </div>

        <div className="bg-white rounded-2xl border shadow-sm mt-8 overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-bold text-slate-900">
              Feature Drift
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Comparison between reference and production data.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-sm text-slate-500">
                    Feature
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Reference Data
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Production Data
                  </th>

                  <th className="p-4 text-sm text-slate-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                {features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-t"
                  >

                    <td className="p-4 font-semibold text-slate-900">
                      {feature.name}
                    </td>

                    <td className="p-4 text-slate-600">
                      {feature.baseline}
                    </td>

                    <td className="p-4 text-slate-600">
                      {feature.current}
                    </td>

                    <td className="p-4">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                        {feature.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            Drift → Retraining Workflow
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-6">

            {[
              "Reference Data",
              "Production Data",
              "Drift Detection",
              "Threshold Check",
              "Retraining",
              "New Model",
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

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            Automatic Retraining
          </h2>

          <p className="text-slate-500 mt-3">
            When significant production data drift is detected,
            the MLOps pipeline can trigger model retraining and
            evaluation before deploying an improved model.
          </p>

          <div className="mt-5">
            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-semibold">
              Retraining: Ready
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Drift;