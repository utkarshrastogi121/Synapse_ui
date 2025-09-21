import React, { useState } from "react";

const diseaseMapping = {
  sandhivata: {
    code: "NAM-5678",
    description: "Sandhivata",
    mappings: [
      { id: "tm2", system: "TM2:MB28", name: "Vata-vyadhi" },
      { id: "biomed", system: "ICD-11:FB20.0", name: "Osteoarthritis" },
    ],
  },
  amavata: {
    code: "NAM-1234",
    description: "Amavata (RA-like disorder)",
    mappings: [
      { id: "tm2", system: "TM2:MB27", name: "Vata-kapha-vyadhi" },
      { id: "biomed", system: "ICD-11:FA20", name: "Rheumatoid Arthritis" },
    ],
  },
};

export default function NewEncounterModal({ isOpen, onClose, onAdd }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [selected, setSelected] = useState(false);

  const mapping = diseaseMapping[diagnosis.trim().toLowerCase()];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
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
          🩺 Add Diagnosis (Dual-Coding)
        </h2>

        {/* Search Input */}
        <input
          type="text"
          value={diagnosis}
          onChange={(e) => {
            setDiagnosis(e.target.value);
            setSelected(false);
          }}
          placeholder="Enter Disease (e.g., Amavata, Sandhivata)"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Show table mapping when found */}
        {mapping && (
          <div
            className={`border border-gray-300 rounded-xl overflow-hidden cursor-pointer ${
              selected ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelected(true)}
          >
            <table className="w-full border-collapse">
              <thead className="text-gray-600 text-sm">
                <tr>
                  <th className="px-4 py-3 text-left">System</th>
                  <th className="px-4 py-3 text-left">Code</th>
                  <th className="px-4 py-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr>
                  <td className="px-4 py-3 border-t">NAMASTE</td>
                  <td className="px-4 py-3 border-t">{mapping.code}</td>
                  <td className="px-4 py-3 border-t">{mapping.description}</td>
                </tr>
                {mapping.mappings.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-t">{row.system}</td>
                    <td className="px-4 py-3 border-t">
                      {/* For ICD row show ICD code, for TM row show TM code */}
                      {row.system.startsWith("TM2")
                        ? row.system
                        : row.system}
                    </td>
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
              const tmMapping = mapping.mappings.find((m) =>
                m.system.startsWith("TM2")
              );
              const icdMapping = mapping.mappings.find((m) =>
                m.system.startsWith("ICD-11")
              );

              const problem = {
                code: mapping.code,
                diagnosis: mapping.description,
                tm: tmMapping ? tmMapping.system : "—",
                ayurveda: tmMapping ? tmMapping.name : "—",
                icd: icdMapping ? icdMapping.system : "—",
                notes: icdMapping ? icdMapping.name : "—",
                addedBy: "Dr. Ananya Sharma",
                date: new Date().toLocaleDateString(),
              };

              onAdd(problem);
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
