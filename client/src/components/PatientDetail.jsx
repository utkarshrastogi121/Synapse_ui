import React from "react";
import PatientHeader from "./PatientHeader";
import ConsentBanner from "./ConsentBanner";
import ActiveProblemList from "./ActiveProblemList";
import MedicationsCard from "./MedicationsCard";
import AllergiesCard from "./AllergiesCard";

export default function PatientDetail({ patient }) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with New Encounter Button */}
      <div className="flex justify-between items-start mb-4">
        <PatientHeader patient={patient} />
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow">
          + New Encounter
        </button>
      </div>

      {/* Consent Banner */}
      <ConsentBanner consent={patient.consent} />

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <ActiveProblemList problems={patient.problems} />
        </div>
        <div className="space-y-4">
          <MedicationsCard meds={patient.medications} />
          <AllergiesCard allergies={patient.allergies} />
        </div>
      </div>
    </div>
  );
}
