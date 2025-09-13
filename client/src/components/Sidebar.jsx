import React from "react";
import {
  FaUserInjured,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar({ active, onNavigate, onLogout }) {
  return (
    <aside className="w-64 h-screen bg-[#0F1C2E] text-white flex flex-col">
      {/* Logo / Title */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-400">⧉</span> EMR Portal
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <button
          className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg font-medium transition ${
            active === "patients"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-800 text-gray-300"
          }`}
          onClick={() => onNavigate("patients")}
        >
          <FaUserInjured /> Patient Search
        </button>

        <button
          className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg font-medium transition ${
            active === "analytics"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-800 text-gray-300"
          }`}
          onClick={() => onNavigate("analytics")}
        >
          <FaChartLine /> Analytics
        </button>
      </nav>

      {/* Footer - User info */}
      <div className="p-4 border-t border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-semibold">
            AS
          </div>
          <div>
            <p className="font-semibold">Dr. Ananya Sharma</p>
            <p className="text-sm text-gray-400">Ayurveda Specialist</p>
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-red-400"
          onClick={onLogout}
          title="Logout"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </aside>
  );
}
