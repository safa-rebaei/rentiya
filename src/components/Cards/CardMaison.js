import React from "react";
import { Link } from "react-router-dom";

export default function CardMaison({house }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Image */}
      <img
        src={house.image}
        alt={house.title}
        className="w-full h-48 object-cover"
      />

      {/* Infos */}
      <div className="p-4">
        <h2 className="text-xl font-semibold">{house.title}</h2>
        <p className="text-gray-600">{house.location}</p>

        <div className="mt-2">
          <p className="text-lg font-bold text-blue-600">{house.price}</p>
          <p className="text-sm text-gray-500">{house.size}</p>
        </div>

        <div className="flex justify-between mt-2 text-sm text-gray-700">
          <span>{house.bedrooms} chambres</span>
          <span>{house.baths} salles de bain</span>
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition">
            Contacter
          </button>

          {/* Link vers RendezVous */}
          <Link
            to="/RendezVous"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-center transition"
          >
          Reserver Maintenant
          </Link>


        </div>
      </div>
    </div>
  );
}
