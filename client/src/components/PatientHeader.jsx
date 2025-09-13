import React from "react";
import { FaUser } from "react-icons/fa";

export default function PatientHeader({ patient }) {
  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <FaUser className="text-gray-600" />
        {patient.name}
      </h2>
      <p className="text-gray-700 text-sm">
        {patient.age}Y {patient.gender} &nbsp; | &nbsp;
        <span className="font-medium">ABHA:</span> {patient.abha} &nbsp; | &nbsp;
        <span className="font-medium">MRN:</span> {patient.mrn}
      </p>
    </div>
  );
}
