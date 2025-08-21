import React from "react";
import { LucideAlertTriangle } from "lucide-react";

export default function EmergencyButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 z-50"
    >
      <LucideAlertTriangle size={24} />
      <span className="font-bold">SOS</span>
    </button>
  );
}
