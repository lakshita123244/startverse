import Analytics from "./pages/Analytics";
import Guardian from "./pages/Guardian";
import DataPipeline from "./pages/DataPipeline";
import Experiments from "./pages/Experiments";
import ModelComparison from "./pages/ModelComparison";
import ModelRegistry from "./pages/ModelRegistry";
import Monitoring from "./pages/Monitoring";
import Drift from "./pages/Drift";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DatasetUpload from "./pages/DatasetUpload";
import Placeholder from "./pages/Placeholder";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/datasets" element={<DatasetUpload />} />

        <Route
  path="/pipeline"
  element={<DataPipeline />}
/>

<Route
  path="/experiments"
  element={<Experiments />}
/>


<Route
  path="/models"
  element={<ModelComparison />}
/>

<Route
  path="/registry"
  element={<ModelRegistry />}
/>


        <Route 
           path="/prediction" 
           element={
           <Prediction 
          />
         } 
         />

        <Route
  path="/analytics"
  element={<Analytics />}
/>
      <Route
  path="/guardian"
  element={<Guardian />}
/>

<Route
  path="/monitoring"
  element={<Monitoring />}
/>

<Route
  path="/drift"
  element={<Drift />}
/>


<Route
 path="/reports" 
element={<Reports />} 
/>

<Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;