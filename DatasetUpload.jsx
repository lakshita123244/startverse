import { useState } from "react";

function DatasetUpload() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [validation, setValidation] = useState(null);

  const handleFile = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    if (!selectedFile.name.endsWith(".csv")) {
      setValidation({
        status: "Invalid",
        message: "Please upload a CSV file."
      });
      return;
    }

    setFile(selectedFile);
    setValidation(null);

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;

      const rows = text
        .split("\n")
        .map((row) => row.trim())
        .filter((row) => row.length > 0)
        .map((row) => row.split(","));

      if (rows.length < 2) {
        setValidation({
          status: "Invalid",
          message: "CSV file does not contain enough data."
        });
        return;
      }

      const headers = rows[0];
      const records = rows.slice(1);

      setColumns(headers);
      setData(records);

      const hasEmptyValues = records.some((row) =>
        row.some((value) => value.trim() === "")
      );

      if (hasEmptyValues) {
        setValidation({
          status: "Invalid",
          message: "Dataset contains empty values."
        });
      } else {
        setValidation({
          status: "Valid",
          message: "Dataset passed basic validation."
        });
      }
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">

          <h1 className="text-3xl font-bold text-slate-900">
            Dataset Upload
          </h1>

          <p className="text-slate-500 mt-1">
            Upload and validate your startup machine learning dataset.
          </p>

        </div>

        <div className="bg-white rounded-xl border shadow-sm p-8">

          <div className="border-2 border-dashed border-violet-300 rounded-xl p-12 text-center bg-violet-50">

            <div className="text-5xl mb-4">
              📁
            </div>

            <h2 className="text-xl font-bold text-slate-800">
              Upload CSV Dataset
            </h2>

            <p className="text-slate-500 mt-2">
              Select your startup revenue prediction dataset.
            </p>

            <label className="inline-block mt-6">

              <span className="bg-violet-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-violet-700">
                Choose CSV File
              </span>

              <input
                type="file"
                accept=".csv"
                onChange={handleFile}
                className="hidden"
              />

            </label>

          </div>

          {file && (

            <div className="mt-8">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                <div className="bg-slate-50 border rounded-xl p-5">

                  <p className="text-sm text-slate-500">
                    File Name
                  </p>

                  <p className="font-semibold mt-2 break-all">
                    {file.name}
                  </p>

                </div>

                <div className="bg-slate-50 border rounded-xl p-5">

                  <p className="text-sm text-slate-500">
                    Rows
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {data.length}
                  </p>

                </div>

                <div className="bg-slate-50 border rounded-xl p-5">

                  <p className="text-sm text-slate-500">
                    Columns
                  </p>

                  <p className="text-2xl font-bold mt-2">
                    {columns.length}
                  </p>

                </div>

              </div>

            </div>

          )}

          {validation && (

            <div
              className={`mt-8 rounded-xl p-5 border ${
                validation.status === "Valid"
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >

              <div className="flex items-center gap-3">

                <span className="text-2xl">
                  {validation.status === "Valid" ? "✅" : "❌"}
                </span>

                <div>

                  <h3
                    className={`font-bold ${
                      validation.status === "Valid"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {validation.status}
                  </h3>

                  <p className="text-sm text-slate-600 mt-1">
                    {validation.message}
                  </p>

                </div>

              </div>

            </div>

          )}

        </div>

        {data.length > 0 && (

          <div className="bg-white rounded-xl border shadow-sm p-6 mt-8">

            <div className="flex items-center justify-between mb-5">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Dataset Preview
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  Preview of uploaded dataset
                </p>

              </div>

              <div className="bg-violet-100 text-violet-700 px-4 py-2 rounded-lg font-medium">
                Version v1
              </div>

            </div>

            <div className="overflow-x-auto">

              <table className="min-w-full border-collapse">

                <thead>

                  <tr className="bg-slate-100">

                    {columns.map((column, index) => (

                      <th
                        key={index}
                        className="border px-4 py-3 text-left text-sm font-semibold text-slate-700"
                      >
                        {column}
                      </th>

                    ))}

                  </tr>

                </thead>

                <tbody>

                  {data.slice(0, 10).map((row, rowIndex) => (

                    <tr
                      key={rowIndex}
                      className="hover:bg-slate-50"
                    >

                      {columns.map((_, columnIndex) => (

                        <td
                          key={columnIndex}
                          className="border px-4 py-3 text-sm text-slate-600"
                        >
                          {row[columnIndex] || "-"}
                        </td>

                      ))}

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {data.length > 10 && (

              <p className="text-sm text-slate-400 mt-4">
                Showing first 10 rows of {data.length} rows.
              </p>

            )}

          </div>

        )}

      </div>

    </div>
  );
}

export default DatasetUpload;