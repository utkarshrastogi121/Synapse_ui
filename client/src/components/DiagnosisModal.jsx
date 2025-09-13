import React, { useState } from "react";

export default function DiagnosisModal({ onClose, onAdd }) {
  const [selected, setSelected] = useState(null);
  const fakeResults = ["Cough - ICD11:AB12", "Fever - ICD11:CD34"];

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[500px]">
        <h3 className="text-lg font-bold mb-4">Select Diagnosis</h3>
        <input
          type="text"
          placeholder="Search diagnosis..."
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
        <div className="space-y-2">
          {fakeResults.map((r, idx) => (
            <div
              key={idx}
              className={`p-3 border rounded cursor-pointer ${
                selected === r ? "bg-blue-100 border-blue-400" : "hover:bg-gray-50"
              }`}
              onClick={() => setSelected(r)}
            >
              {r}
            </div>
          ))}
        </div>
        {selected && (
          <div className="mt-4 p-3 bg-gray-50 rounded text-gray-700">
            Selected: {selected}
          </div>
        )}
        <div className="flex justify-end mt-6 space-x-3">
          <button className="px-4 py-2 rounded border" onClick={onClose}>
            Cancel
          </button>
          <button
            disabled={!selected}
            className={`px-4 py-2 rounded text-white ${
              selected ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => {
              onAdd(selected);
              onClose();
            }}
          >
            Add to Problem List
          </button>
        </div>
      </div>
    </div>
  );
}
