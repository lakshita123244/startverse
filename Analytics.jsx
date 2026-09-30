import { useEffect, useState } from "react";

function Analytics() {
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
            Business Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Analytics generated from the latest business prediction.
          </p>

          <div className="mt-8 bg-white rounded-2xl border p-10 text-center">
            <p className="text-slate-500">
              No prediction data available.
            </p>

            <p className="text-sm text-slate-400 mt-2">
              Complete a Business Prediction first.
            </p>
          </div>

        </div>
      </div>
    );
  }

  const monthlyRevenue = Number(
    data.formData.monthly_revenue
  );

  const monthlyExpenses = Number(
    data.formData.monthly_expenses
  );

  const monthlyProfit = Number(
    data.formData.monthly_profit
  );

  const predictedProfit = Number(
    data.prediction.predicted_future_6_month_profit
  );

  const profitMargin =
    monthlyRevenue > 0
      ? (monthlyProfit / monthlyRevenue) * 100
      : 0;

  const cashFlow =
    monthlyRevenue - monthlyExpenses;

  const estimatedLoss =
    cashFlow < 0 ? Math.abs(cashFlow) : 0;

  const burnRate =
    monthlyExpenses > monthlyRevenue
      ? monthlyExpenses - monthlyRevenue
      : 0;

  const overallStatus =
    data.agents?.overall_status || "unknown";

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Business Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Business metrics derived from the latest ML prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Monthly Revenue
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-2">
              ₹{monthlyRevenue.toLocaleString()}
            </h2>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Monthly Profit
            </p>

            <h2 className="text-2xl font-bold text-green-600 mt-2">
              ₹{monthlyProfit.toLocaleString()}
            </h2>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Profit Margin
            </p>

            <h2 className="text-2xl font-bold text-violet-600 mt-2">
              {profitMargin.toFixed(2)}%
            </h2>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Cash Flow
            </p>

            <h2
              className={`text-2xl font-bold mt-2 ${
                cashFlow >= 0
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              ₹{cashFlow.toLocaleString()}
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Predicted 6-Month Profit
            </p>

            <h2 className="text-2xl font-bold text-violet-600 mt-2">
              ₹{predictedProfit.toLocaleString()}
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              From trained ML model
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Estimated Loss
            </p>

            <h2 className="text-2xl font-bold text-red-600 mt-2">
              ₹{estimatedLoss.toLocaleString()}
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              Based on current revenue and expenses
            </p>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">
            <p className="text-sm text-slate-500">
              Burn Rate
            </p>

            <h2 className="text-2xl font-bold text-orange-600 mt-2">
              ₹{burnRate.toLocaleString()}
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              Current monthly cash deficit
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <h2 className="text-xl font-bold text-slate-900">
              Financial Overview
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Revenue
                  </span>

                  <span className="font-semibold">
                    ₹{monthlyRevenue.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full mt-2">
                  <div
                    className="h-3 bg-violet-500 rounded-full"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Expenses
                  </span>

                  <span className="font-semibold">
                    ₹{monthlyExpenses.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full mt-2">
                  <div
                    className="h-3 bg-orange-400 rounded-full"
                    style={{
                      width: `${
                        monthlyRevenue > 0
                          ? Math.min(
                              (monthlyExpenses /
                                monthlyRevenue) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="text-slate-500">
                    Profit
                  </span>

                  <span className="font-semibold">
                    ₹{monthlyProfit.toLocaleString()}
                  </span>
                </div>

                <div className="h-3 bg-slate-100 rounded-full mt-2">
                  <div
                    className="h-3 bg-green-500 rounded-full"
                    style={{
                      width: `${
                        monthlyRevenue > 0
                          ? Math.min(
                              (Math.max(monthlyProfit, 0) /
                                monthlyRevenue) *
                                100,
                              100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl border shadow-sm p-6">

            <h2 className="text-xl font-bold text-slate-900">
              Business Health
            </h2>

            <div className="mt-6">

              <div className="flex items-center justify-between border-b pb-5">
                <span className="text-slate-500">
                  Overall Agent Status
                </span>

                <span className="px-4 py-2 rounded-full bg-slate-100 font-semibold capitalize">
                  {overallStatus}
                </span>
              </div>

              <div className="mt-5">

                <p className="text-sm text-slate-500">
                  Model
                </p>

                <p className="font-semibold mt-1">
                  {data.prediction.model_used}
                </p>

              </div>

              <div className="mt-5">

                <p className="text-sm text-slate-500">
                  Customer Satisfaction
                </p>

                <p className="font-semibold mt-1">
                  {data.formData.customer_satisfaction_score}/100
                </p>

              </div>

              <div className="mt-5">

                <p className="text-sm text-slate-500">
                  Market Growth Rate
                </p>

                <p className="font-semibold mt-1">
                  {data.formData.market_growth_rate}%
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;
