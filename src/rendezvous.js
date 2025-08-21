import React, { useState } from "react";

export default function RendezVous() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    date: "",
    heure: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées : ", formData);
    alert("Votre demande de rendez-vous a été envoyée avec succès !");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Demander un Rendez-vous
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="nom"
            placeholder="Votre Nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="tel"
            name="telephone"
            placeholder="Votre Téléphone"
            value={formData.telephone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />

          <div className="flex gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
            <input
              type="time"
              name="heure"
              value={formData.heure}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-lg"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message (facultatif)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            rows="3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Envoyer la Demande
          </button>
        </form>
      </div>
    </section>
  );
}
