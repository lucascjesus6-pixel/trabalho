import React, { useState } from "react";
import Header from "./components/Header";
import EmergencyButton from "./components/EmergencyButton";
import Chat from "./components/Chat";
import InfoCards from "./components/InfoCards";
import MapView from "./components/MapView";
import SafetyTips from "./components/SafetyTips";
import Footer from "./components/Footer";

export default function App() {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleEmergency = () => {
    setEmergencyActive(true);
    alert("SOS Ativado! Contatos e delegacias estão sendo notificados.");
    // Aqui pode adicionar integração com API de localização e contatos
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <EmergencyButton onClick={handleEmergency} />
      <div className="flex flex-col md:flex-row p-4 gap-4">
        <div className="md:w-2/3 space-y-4">
          <InfoCards />
          <SafetyTips />
        </div>
        <div className="md:w-1/3 space-y-4">
          <Chat chatHistory={chatHistory} setChatHistory={setChatHistory} />
          <MapView />
        </div>
      </div>
      <Footer />
    </div>
  );
}
