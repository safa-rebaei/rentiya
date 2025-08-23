import React from "react";

export default function RendezVous() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")`,
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Carte du formulaire */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
          Demander un Rendez-vous
        </h2>

        <form className="space-y-4">
          {/* Champ Nom */}
          <input
            type="text"
            placeholder="Votre Nom"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          {/* Champ Email */}
          <input
            type="email"
            placeholder="Votre Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          {/* Champ Téléphone */}
          <input
            type="tel"
            placeholder="Votre Téléphone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />

          {/* Date et Heure */}
          <div className="flex gap-4">
            <input
              type="date"
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <input
              type="time"
              className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message (facultatif)"
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg transition duration-300"
          >
            Envoyer la Demande
          </button>
        </form>
      </div>
    </section>
  );
}

