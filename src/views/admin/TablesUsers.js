import React from "react";

// components

import GestiondesUtilisateurs from "components/Cards/GestiondesUtilisateurs.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <GestiondesUtilisateurs/>
        </div> */}
        <div className="w-full mb-12 px-4">
          <GestiondesUtilisateurs  color="dark" />
        </div>
      </div>
    </>
  );
}
