import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import CardMaison from "../components/Cards/CardMaison";
import maison1 from "../assets/img/maison1.jpeg";
import maison2 from "../assets/img/maison2.jpeg";
import Footer from "components/Footers/Footer.js";

// Données
const houses = [
  {
    id: 1,
    title: "Villa S3 avec piscine",
    location: "Hammamet Nord",
    price: 3000,
    size: "220 m²",
    bedrooms: 3,
    baths: 2,
    image: maison1,
  },
  {
    id: 2,
    title: "Maison S2 proche de la plage",
    location: "Hammamet Sud",
    price: 1800,
    size: "150 m²",
    bedrooms: 2,
    baths: 1,
    image: maison2,
  },
  {
    id: 3,
    title: "Maison S2 proche de la plage",
    location: "Hammamet Sud",
    price: 1800,
    size: "150 m²",
    bedrooms: 2,
    baths: 1,
    image: maison1,
  },
  {
    id: 4,
    title: "Maison S2 proche de la plage",
    location: "Hammamet Sud",
    price: 1800,
    size: "150 m²",
    bedrooms: 2,
    baths: 1,
    image: maison1,
  },
];

export default function Hammamet() {
  // States du filtrage
  const [search, setSearch] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filtrage en temps réel
  const filteredHouses = houses.filter((house) => {
    return (
      house.title.toLowerCase().includes(search.toLowerCase()) ||
      house.location.toLowerCase().includes(search.toLowerCase())
    ) && 
    (minBedrooms === "" || house.bedrooms >= Number(minBedrooms)) &&
    (maxPrice === "" || house.price <= Number(maxPrice));
  });

  return (
    <>
      <IndexNavbar fixed />

      {/* FILTRES */}
      <div className="mt-24 p-4 max-w-5xl mx-auto bg-white shadow-md rounded-xl">
        <h2 className="text-xl font-bold mb-4">🔍 Filtrer les maisons</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Recherche */}
          <input
            type="text"
            placeholder="Rechercher par titre ou localisation..."
            className="border p-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filtre chambres */}
          <select
            className="border p-2 rounded-lg"
            value={minBedrooms}
            onChange={(e) => setMinBedrooms(e.target.value)}
          >
            <option value="">Chambres (min)</option>
            <option value="1">1 chambre</option>
            <option value="2">2 chambres</option>
            <option value="3">3 chambres</option>
            <option value="4">4 chambres</option>
          </select>

          {/* Prix max */}
          <input
            type="number"
            placeholder="Prix max (TND)"
            className="border p-2 rounded-lg"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* LISTE DES MAISONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(345px, 1fr))",
          gap: "20px",
          padding: "20px",
          marginTop: "20px",
          marginBottom: "80px",
        }}
      >
        {filteredHouses.map((house) => (
          <CardMaison key={house.id} house={house} />
        ))}
      </div>

      <Footer />
    </>
  );
}
