function Placeholder({ title, description }) {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-slate-900">
        {title}
      </h1>

      <p className="text-slate-500 mt-2">
        {description}
      </p>

      <div className="mt-8 bg-white rounded-xl border p-10">
        <p className="text-slate-400">
          This module is under development.
        </p>
      </div>
    </div>
  );
}

export default Placeholder;