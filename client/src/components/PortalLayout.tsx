import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PatientSearch from "./PatientSearch";
import EncounterScreen from "./EncounterScreen ";
import AnalyticsScreen from "./AnalyticsScreen";

export default function PortalLayout() {
  const [activeScreen, setActiveScreen] = useState("patients");

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <Sidebar active={activeScreen} onNavigate={setActiveScreen} onLogout={() => { /* TODO: implement logout */ }} />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        {activeScreen === "patients" && <PatientSearch />}
        {activeScreen === "encounters" && <EncounterScreen />}
        {activeScreen === "analytics" && <AnalyticsScreen />}
      </main>
    </div>
  );
}
