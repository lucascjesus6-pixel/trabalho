import React from "react";
import { cardsData } from "../data/cardsData";

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardsData.map((card, idx) => (
        <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="font-bold text-lg mb-2">{card.title}</h3>
          <p className="text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
