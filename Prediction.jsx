import { useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

function Prediction() {
  const [formData, setFormData] = useState({
    business_type: "Services",
    industry: "IT",
    sales_channel: "Online",
    location_type: "Urban",
    funding_type: "Bootstrapped",
    business_model_type: "B2B",
    monthly_revenue: "",
    monthly_expenses: "",
    monthly_profit: "",
    marketing_budget: "",
    years_in_business: "",
    employee_count: "",
    customer_retention_rate: "",
    customer_acquisition_cost: "",
    competition_level: "",
    market_growth_rate: "",
    digital_presence_score: "",
    inventory_turnover_rate: "",
    operational_cost_ratio: "",
    average_order_value: "",
    customer_satisfaction_score: "",
    brand_strength_score: "",
    starting_budget: "",
    founder_experience_years: "",
    team_size: "",
    target_market_size: "",
    product_uniqueness_score: "",
    marketing_strategy_score: "",
    scalability_score: "",
    innovation_score: "",
    customer_validation_score: "",
  });

  const [prediction, setPrediction] = useState(null);
  const [agents, setAgents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setPrediction(null);
    setAgents(null);

    try {
      const numericFields = [
        "monthly_revenue",
        "monthly_expenses",
        "monthly_profit",
        "marketing_budget",
        "years_in_business",
        "employee_count",
        "customer_retention_rate",
        "customer_acquisition_cost",
        "competition_level",
        "market_growth_rate",
        "digital_presence_score",
        "inventory_turnover_rate",
        "operational_cost_ratio",
        "average_order_value",
        "customer_satisfaction_score",
        "brand_strength_score",
        "starting_budget",
        "founder_experience_years",
        "team_size",
        "target_market_size",
        "product_uniqueness_score",
        "marketing_strategy_score",
        "scalability_score",
        "innovation_score",
        "customer_validation_score",
      ];

      const requestData = { ...formData };

      numericFields.forEach((field) => {
        requestData[field] = Number(requestData[field]);
      });

      const predictionResponse = await axios.post(
        `${API_URL}/predict`,
        requestData
      );

      setPrediction(predictionResponse.data);

      const agentResponse = await axios.post(
        `${API_URL}/agents/insights`,
        requestData
      );

      setAgents(agentResponse.data);

      localStorage.setItem(
  "startupverse_latest_analysis",
  JSON.stringify({
    formData: requestData,
    prediction: predictionResponse.data,
    agents: agentResponse.data,
  })
);
    } catch (err) {
      if (err.response) {
        setError(
          `Backend error: ${err.response.status} - ${JSON.stringify(
            err.response.data
          )}`
        );
      } else {
        setError(
          "Could not connect to the FastAPI backend. Make sure FastAPI is running on port 8000."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const selectFields = [
    {
      name: "business_type",
      label: "Business Type",
      options: ["Services", "Trading", "Manufacturing"],
    },
    {
      name: "industry",
      label: "Industry",
      options: [
        "Education",
        "Healthcare",
        "IT",
        "Textile",
        "FMCG",
        "Food",
        "Construction",
      ],
    },
    {
      name: "sales_channel",
      label: "Sales Channel",
      options: ["Online", "Offline", "Both"],
    },
    {
      name: "location_type",
      label: "Location Type",
      options: ["Urban", "Rural"],
    },
    {
      name: "funding_type",
      label: "Funding Type",
      options: ["VC", "Bank Loan", "Bootstrapped", "Angel"],
    },
    {
      name: "business_model_type",
      label: "Business Model",
      options: ["B2C", "B2B", "Hybrid"],
    },
  ];

  const numberFields = [
    ["monthly_revenue", "Monthly Revenue"],
    ["monthly_expenses", "Monthly Expenses"],
    ["monthly_profit", "Monthly Profit"],
    ["marketing_budget", "Marketing Budget"],
    ["years_in_business", "Years in Business"],
    ["employee_count", "Employee Count"],
    ["customer_retention_rate", "Customer Retention Rate (%)"],
    ["customer_acquisition_cost", "Customer Acquisition Cost"],
    ["competition_level", "Competition Level (1-10)"],
    ["market_growth_rate", "Market Growth Rate"],
    ["digital_presence_score", "Digital Presence Score (0-10)"],
    ["inventory_turnover_rate", "Inventory Turnover Rate"],
    ["operational_cost_ratio", "Operational Cost Ratio (0-1)"],
    ["average_order_value", "Average Order Value"],
    ["customer_satisfaction_score", "Customer Satisfaction Score (0-100)"],
    ["brand_strength_score", "Brand Strength Score (0-100)"],
    ["starting_budget", "Starting Budget"],
    ["founder_experience_years", "Founder Experience (Years)"],
    ["team_size", "Team Size"],
    ["target_market_size", "Target Market Size"],
    ["product_uniqueness_score", "Product Uniqueness Score (0-10)"],
    ["marketing_strategy_score", "Marketing Strategy Score (0-10)"],
    ["scalability_score", "Scalability Score (0-10)"],
    ["innovation_score", "Innovation Score (0-10)"],
    ["customer_validation_score", "Customer Validation Score (0-10)"],
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Business Prediction
          </h1>

          <p className="text-slate-500 mt-2">
            Enter startup business details to generate ML prediction and
            multi-agent business insights.
          </p>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm p-8">

          <h2 className="text-xl font-bold text-slate-900">
            Startup Business Details
          </h2>

          <p className="text-sm text-slate-500 mt-1 mb-8">
            Provide the required business information below.
          </p>

          <form onSubmit={handleSubmit}>

            <h3 className="text-lg font-semibold text-violet-700 mb-4">
              Business Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {selectFields.map((field) => (
                <div key={field.name}>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {field.label}
                  </label>

                  <select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                </div>
              ))}

            </div>

            <h3 className="text-lg font-semibold text-violet-700 mt-10 mb-4">
              Business Metrics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {numberFields.map(([name, label]) => (
                <div key={name}>

                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {label}
                  </label>

                  <input
                    type="number"
                    step="any"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-violet-500"
                  />

                </div>
              ))}

            </div>

            <div className="mt-8 flex justify-end">

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 disabled:opacity-50"
              >
                {loading ? "Analyzing..." : "Analyze Business"}
              </button>

            </div>

          </form>
        </div>

        {error && (
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <h2 className="font-bold text-red-700">
              Prediction Error
            </h2>

            <p className="text-red-600 mt-2">
              {error}
            </p>
          </div>
        )}

        {prediction && (
          <div className="mt-8 bg-white rounded-2xl border shadow-sm p-8">

            <h2 className="text-xl font-bold text-slate-900">
              ML Prediction
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

              <div className="border rounded-xl p-6">
                <p className="text-sm text-slate-500">
                  Predicted Future 6-Month Profit
                </p>

                <p className="text-2xl font-bold text-violet-600 mt-2">
                  ₹{Number(
                    prediction.predicted_future_6_month_profit
                  ).toLocaleString()}
                </p>
              </div>

              <div className="border rounded-xl p-6">
                <p className="text-sm text-slate-500">
                  Model Used
                </p>

                <p className="text-xl font-bold text-slate-800 mt-2">
                  {prediction.model_used}
                </p>
              </div>

            </div>

          </div>
        )}

        {agents && (
          <div className="mt-8 bg-white rounded-2xl border shadow-sm p-8">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">
                Multi-Agent Business Analysis
              </h2>

              <span className="px-4 py-2 rounded-full bg-slate-100 font-semibold capitalize">
                Overall: {agents.overall_status}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

              {agents.insights.map((insight) => (
                <div
                  key={insight.agent}
                  className="border rounded-xl p-5"
                >

                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">
                      {insight.agent}
                    </h3>

                    <span className="text-sm font-semibold capitalize">
                      {insight.status}
                    </span>
                  </div>

                  <p className="text-slate-700 mt-4">
                    {insight.message}
                  </p>

                  <p className="text-sm text-slate-500 mt-3">
                    <strong>Recommendation:</strong>{" "}
                    {insight.recommendation}
                  </p>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Prediction;