import React, { useState } from "react";

const diseaseMapping = {
  amavata: {
    code: "NAM-1234",
    description: "Amavata (RA-like disorder)",
    mappings: [
      {
        id: "tm2",
        system: "ICD-11 TM2",
        code: "TM2:MB27",
        name: "Bi-syndrome with pain",
      },
      {
        id: "biomed",
        system: "ICD-11 Biomedicine",
        code: "ICD-11:FA20",
        name: "Rheumatoid Arthritis",
      },
    ],
  },
};

export default function NewEncounterModal({ isOpen, onClose, onAdd }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [selected, setSelected] = useState(null);

  const mapping = diseaseMapping[diagnosis.trim().toLowerCase()];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent bg-opacity-30">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span role="img" aria-label="stethoscope">🩺</span> Add Diagnosis (Dual-Coding)
        </h2>

        {/* Search Input */}
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => {
            setDiagnosis(e.target.value);
            setSelected(null);
          }}
          placeholder="Enter Disease (e.g., Amavata)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Table appears only when a mapping is found */}
        {mapping && (
          <div className="border rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-gray-100 text-gray-600 text-sm">
                <tr>
                  <th className="px-4 py-3 text-left">System</th>
                  <th className="px-4 py-3 text-left">Code</th>
                  <th className="px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {mapping.mappings.map((row) => (
                  <tr
                    key={row.id}
                    className={`cursor-pointer ${
                      selected === row.id ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelected(row.id)}
                  >
                    <td className="px-4 py-3 border-t flex items-center gap-2">
                      <input
                        type="radio"
                        name="diseaseSelect"
                        checked={selected === row.id}
                        onChange={() => setSelected(row.id)}
                      />
                      <span>{row.system}</span>
                    </td>
                    <td className="px-4 py-3 border-t">{row.code}</td>
                    <td className="px-4 py-3 border-t">{row.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add button */}
        <button
          onClick={() => {
            if (mapping && selected) {
              const chosen = mapping.mappings.find((m) => m.id === selected);
              onAdd({
                disease: mapping.description,
                code: mapping.code,
                system: chosen.system,
                icdCode: chosen.code,
                icdName: chosen.name,
              });
              onClose();
            }
          }}
          disabled={!selected}
          className={`mt-8 w-full py-3 rounded-xl transition ${
            selected
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          ✓ Add to Problem List
        </button>
      </div>
    </div>
  );
}
