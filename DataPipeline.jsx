function DataPipeline() {
  const steps = [
    {
      number: "01",
      title: "Dataset Upload",
      description: "Upload startup business data in CSV format.",
      status: "Completed",
    },
    {
      number: "02",
      title: "Data Validation",
      description: "Check missing values, duplicates, data types and invalid values.",
      status: "Completed",
    },
    {
      number: "03",
      title: "DVC Versioning",
      description: "Track and version datasets for reproducible ML workflows.",
      status: "Ready",
    },
    {
      number: "04",
      title: "Feature Engineering",
      description: "Prepare business features for machine learning.",
      status: "Ready",
    },
    {
      number: "05",
      title: "Model Training",
      description: "Train machine learning models using validated data.",
      status: "Ready",
    },
    {
      number: "06",
      title: "Model Evaluation",
      description: "Evaluate trained models using standard ML metrics.",
      status: "Ready",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Data Pipeline
          </h1>

          <p className="text-slate-500 mt-2">
            Manage the StartupVerse machine learning data pipeline.
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900">
            MLOps Pipeline
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-slate-50 border rounded-2xl p-6"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-violet-600">
                    STEP {step.number}
                  </span>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border">
                    {step.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-5">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-900">
            Pipeline Flow
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {[
              "Dataset",
              "Validation",
              "DVC",
              "Features",
              "Training",
              "Evaluation",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
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

export default DataPipeline;