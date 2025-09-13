import React from "react";

export default function ActiveProblemList({ problems }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold mb-2">Active Problem List</h3>
      {problems.map((p, i) => (
        <div key={i} className="border-t pt-2 first:border-t-0 first:pt-0">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
              {p.nam}
            </span>
            <span>{p.term1}</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
              {p.tm}
            </span>
            <span>{p.term2}</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
              {p.icd}
            </span>
            <span>{p.term3}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Added by {p.addedBy} on {p.date} &nbsp; | &nbsp;
            <button className="text-blue-600 hover:underline">Show Audit</button>
          </p>
        </div>
      ))}
    </div>
  );
}
