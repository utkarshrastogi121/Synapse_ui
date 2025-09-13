import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function AllergiesCard({ allergies }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <FaExclamationTriangle className="text-red-600" /> Allergies
      </h3>
      {allergies.length ? (
        <ul className="text-sm list-disc list-inside text-gray-700">
          {allergies.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm">No Known Allergies</p>
      )}
    </div>
  );
}
