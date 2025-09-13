import React, { useState } from "react";
import {
  FaSearch,
  FaUsers,
  FaShieldAlt,
  FaPills,
  FaExclamationTriangle,
  FaList,
} from "react-icons/fa";
import NewEncounterModal from "./NewEncounterModal";

const mockPatients = [
  {
    id: 1,
    name: "Rohan Kumar",
    age: 40,
    gender: "Male",
    abha: "12-3456-7890-1234",
    mrn: "KEM-45678",
    consent: {
      active: true,
      type: "General Treatment",
      version: "v1.2",
      lastUpdated: "10-Sep-2025",
      source: "Patient App",
    },
    problems: [
      {
        code: "NAM-5678",
        diagnosis: "Sandhivata",
        tm: "TM2:MB28",
        ayurveda: "Vata-vyadhi",
        icd: "ICD-11:FB20.0",
        notes: "Osteoarthritis",
        addedBy: "Dr. V. Gupta",
        date: "02-Jul-2025",
      },
    ],
    medications: ["Yogaraja Guggulu (2 tabs, BD)", "Mahanarayan Taila"],
    allergies: [],
  },
];

export default function PatientSearch() {
  const [abha, setAbha] = useState("");
  const [mrn, setMrn] = useState("");
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showEncounterModal, setShowEncounterModal] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockPatients.filter(
      (p) =>
        (abha && p.abha.includes(abha)) ||
        (mrn && p.mrn.toLowerCase().includes(mrn.toLowerCase())) ||
        (name && p.name.toLowerCase().includes(name.toLowerCase()))
    );
    setResults(filtered);
  };

  if (selectedPatient) {
    const handleAddProblem = (newDiagnosis) => {
      if (!newDiagnosis) return;

      // Update immutably so React re-renders
      setSelectedPatient((prev) => ({
        ...prev,
        problems: [
          ...prev.problems,
          {
            code: newDiagnosis.code,
            diagnosis: newDiagnosis.disease,
            tm: newDiagnosis.system === "ICD-11 TM2" ? newDiagnosis.icdCode : "—",
            ayurveda: newDiagnosis.disease,
            icd:
              newDiagnosis.system === "ICD-11 Biomedicine"
                ? newDiagnosis.icdCode
                : "—",
            notes: newDiagnosis.icdName,
            addedBy: "Dr. Ananya Sharma",
            date: new Date().toLocaleDateString(),
          },
        ],
      }));
    };

    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Back Button */}
        <button
          onClick={() => setSelectedPatient(null)}
          className="mb-4 bg-white text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100 flex items-center gap-2"
        >
          ← Back to Search
        </button>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold">{selectedPatient.name}</h1>
            <p className="text-gray-600 mt-1">
              {selectedPatient.age}Y {selectedPatient.gender} &nbsp;|&nbsp; ABHA:{" "}
              {selectedPatient.abha} &nbsp;|&nbsp; MRN: {selectedPatient.mrn}
            </p>
          </div>
          <button
            onClick={() => setShowEncounterModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow"
          >
            + New Encounter
          </button>
        </div>

        <NewEncounterModal
          isOpen={showEncounterModal}
          onClose={() => setShowEncounterModal(false)}
          onAdd={handleAddProblem}
        />

        {/* Consent Banner */}
        <div
          className={`flex items-center gap-2 p-4 rounded-lg mb-6 ${
            selectedPatient.consent.active
              ? "bg-blue-100 text-blue-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <FaShieldAlt className="text-xl" />
          <span className="text-sm">
            Consent {selectedPatient.consent.active ? "Active" : "Inactive"}:{" "}
            {selectedPatient.consent.type} ({selectedPatient.consent.version}).
            Last updated: {selectedPatient.consent.lastUpdated} by{" "}
            {selectedPatient.consent.source}.
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Active Problem List */}
          <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-gray-700">Active Problem List</h2>
              <FaList className="text-gray-400" />
            </div>
            <div className="space-y-4">
              {selectedPatient.problems.map((p, idx) => (
                <div key={idx} className="border p-3 rounded-lg">
                  <div className="flex flex-wrap gap-2 mb-1 text-sm">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                      {p.code}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {p.tm}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {p.ayurveda}
                    </span>
                    <span className="bg-green-200 text-green-800 px-2 py-1 rounded">
                      {p.icd}
                    </span>
                  </div>
                  <p className="text-gray-700">{p.notes}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Added by {p.addedBy} on {p.date}{" "}
                    <span className="text-blue-600 cursor-pointer">
                      Show Audit
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            {/* Medications */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaPills />
                <h2 className="font-semibold text-gray-700">Medications</h2>
              </div>
              <ul className="list-disc pl-5">
                {selectedPatient.medications.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Allergies */}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-2 mb-2">
                <FaExclamationTriangle />
                <h2 className="font-semibold text-gray-700">Allergies</h2>
              </div>
              <p>
                {selectedPatient.allergies.length > 0
                  ? selectedPatient.allergies.join(", ")
                  : "No Known Allergies"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Search view
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaUsers className="text-blue-600 text-3xl" />
        <h1 className="text-2xl font-bold text-gray-800">Patient Lookup</h1>
      </div>

      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              ABHA Number
            </label>
            <input
              type="text"
              placeholder="e.g., 12-3456-7890-1234"
              value={abha}
              onChange={(e) => setAbha(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              MRN
            </label>
            <input
              type="text"
              placeholder="e.g., KEM-45678"
              value={mrn}
              onChange={(e) => setMrn(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Patient Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition"
            >
              <FaSearch /> Search
            </button>
          </div>
        </form>
      </div>

      {/* Search Results */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center px-6 py-3 border-b bg-gray-50">
          <span className="font-semibold text-gray-700">Search Results</span>
        </div>
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Patient Name</th>
              <th className="px-6 py-3">ABHA Number</th>
              <th className="px-6 py-3">Date of Birth</th>
              <th className="px-6 py-3">MRN</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((p) => (
                <tr
                  key={p.id}
                  className="border-t hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedPatient(p)}
                >
                  <td className="px-6 py-3">{p.name}</td>
                  <td className="px-6 py-3">{p.abha}</td>
                  <td className="px-6 py-3">{p.dob || "—"}</td>
                  <td className="px-6 py-3">{p.mrn}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-6 text-center text-gray-500"
                >
                  No results found. Try searching above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
