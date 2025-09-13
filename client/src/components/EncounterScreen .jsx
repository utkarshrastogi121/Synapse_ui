import React, { useState } from "react";
import DiagnosisModal from "./DiagnosisModal";

export default function EncounterScreen() {
  const [problemList, setProblemList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Encounter Dashboard</h2>
      <div className="p-4 bg-white shadow rounded-lg">
        <h3 className="font-semibold mb-3">Problem List</h3>
        <ul className="mb-4 space-y-2">
          {problemList.length === 0 && (
            <li className="text-gray-500">No problems added yet.</li>
          )}
          {problemList.map((item, idx) => (
            <li key={idx} className="p-2 border rounded">
              {item}
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          + Add Diagnosis
        </button>
      </div>

      {showModal && (
        <DiagnosisModal
          onClose={() => setShowModal(false)}
          onAdd={(d) => setProblemList([...problemList, d])}
        />
      )}
    </section>
  );
}
