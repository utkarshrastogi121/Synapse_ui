import React from "react";

export default function ConsentBanner({ consent }) {
  return (
    <div className="bg-blue-100 text-sm text-gray-700 px-4 py-2 rounded border border-blue-200">
      <span className="font-semibold text-green-700">Consent Active: </span>
      {consent.text} (v{consent.version}). Last updated:{" "}
      <span className="font-medium">{consent.lastUpdated}</span> by Patient App.
    </div>
  );
}
