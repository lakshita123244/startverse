import { useEffect, useState } from "react";

function Guardian() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "startupverse_latest_analysis"
    );

    if (saved) {
      setData(JSON.parse(saved));
    }
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900">
            CEO Decision Guardian
          </h1>

          <p className="text-slate-500 mt-2">
            AI-assisted business decision support.
          </p>

          <div className="mt-8 bg-white rounded-2xl border p-10 text-center">
            <p className="text-slate-500">
              No business analysis available.
            </p>

            <p className="text-sm text-slate-400 mt-2">
              Complete a Business Prediction first.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const status = data.agents?.overall_status || "unknown";

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            CEO Decision Guardian
          </h1>

          <p className="text-slate-500 mt-2">
            Decision support based on ML prediction and business analysis.
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mb-8">
          <p className="text-sm text-slate-500">
            Overall Business Status
          </p>

          <div className="mt-3">
            <span className="inline-block px-5 py-2 rounded-full bg-slate-100 text-lg font-bold capitalize">
              {status}
            </span>
          </div>

          <div className="mt-5">
            <p className="text-sm text-slate-500">
              Predicted Future 6-Month Profit
            </p>

            <p className="text-3xl font-bold text-violet-600 mt-1">
              ₹
              {Number(
                data.prediction.predicted_future_6_month_profit
              ).toLocaleString()}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-5">
          Business Intelligence Agents
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {data.agents?.insights?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.agent}
                </h3>

                <span className="px-3 py-1 rounded-full bg-slate-100 text-sm font-semibold capitalize">
                  {item.status}
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-500">
                  Insight
                </p>

                <p className="mt-2 text-slate-700">
                  {item.message}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-500">
                  Recommendation
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  {item.recommendation}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-6 mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            Decision Summary
          </h2>

          <p className="text-slate-600 mt-3">
            The CEO Decision Guardian combines the machine learning
            prediction with finance, marketing, operations, customer,
            and founder insights to support business decisions.
          </p>

          <div className="mt-5">
            <p className="text-sm text-slate-500">
              Model Used
            </p>

            <p className="font-semibold mt-1">
              {data.prediction.model_used}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Guardian;