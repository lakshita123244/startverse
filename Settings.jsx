import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoRetraining, setAutoRetraining] = useState(true);
  const [driftMonitoring, setDriftMonitoring] = useState(true);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Settings
          </h1>
          <p className="text-slate-500 mt-2">
            Manage StartupVerse MLOps platform configuration.
          </p>
        </div>

        <div className="space-y-6">

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              MLOps Configuration
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-slate-800">
                    Drift Monitoring
                  </p>
                  <p className="text-sm text-slate-500">
                    Monitor production data for feature drift.
                  </p>
                </div>

                <button
                  onClick={() => setDriftMonitoring(!driftMonitoring)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    driftMonitoring
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {driftMonitoring ? "Enabled" : "Disabled"}
                </button>
              </div>

              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="font-medium text-slate-800">
                    Automatic Retraining
                  </p>
                  <p className="text-sm text-slate-500">
                    Retrain models when configured drift conditions occur.
                  </p>
                </div>

                <button
                  onClick={() => setAutoRetraining(!autoRetraining)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    autoRetraining
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {autoRetraining ? "Enabled" : "Disabled"}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-800">
                    Notifications
                  </p>
                  <p className="text-sm text-slate-500">
                    Receive platform status and monitoring notifications.
                  </p>
                </div>

                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    notifications
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {notifications ? "Enabled" : "Disabled"}
                </button>
              </div>

            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Backend Configuration
            </h2>

            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                FastAPI Backend URL
              </label>

              <input
                type="text"
                value="http://127.0.0.1:8000"
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-700"
              />

              <p className="text-xs text-slate-500 mt-2">
                Development backend endpoint used by the frontend.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Platform Components
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

              <div className="p-4 rounded-lg bg-slate-50">
                <p className="font-medium">FastAPI</p>
                <p className="text-sm text-green-600 mt-1">
                  Backend API
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50">
                <p className="font-medium">MLflow</p>
                <p className="text-sm text-slate-500 mt-1">
                  Experiment Tracking
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50">
                <p className="font-medium">DVC</p>
                <p className="text-sm text-slate-500 mt-1">
                  Dataset Versioning
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50">
                <p className="font-medium">Evidently</p>
                <p className="text-sm text-slate-500 mt-1">
                  Drift Monitoring
                </p>
              </div>

            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900">
              Configuration Status
            </h3>

            <p className="text-sm text-blue-800 mt-2">
              Settings are currently stored in the frontend session.
              Backend persistence will be added during final integration.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;