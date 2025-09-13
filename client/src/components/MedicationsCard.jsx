import React from "react";
import { FaPills } from "react-icons/fa";

export default function MedicationsCard({ meds }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <FaPills className="text-blue-600" /> Medications
      </h3>
      {meds.length ? (
        <ul className="text-sm list-disc list-inside text-gray-700">
          {meds.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No Medications</p>
      )}
    </div>
  );
}
