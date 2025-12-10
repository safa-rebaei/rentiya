import React from "react";
import pinkyy from "../assets/img/pinky.jpg";

export default function RendezVous() {
  return (
    <div
      className="page-wrapper"
      style={{
        backgroundImage: `url(${pinkyy})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="form_area">
          <p className="title">Prise de rendez-vous</p>

          <form>
            <div className="form_group">
              <label htmlFor="name" className="sub_title">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                placeholder="Entrez votre nom complet"
                className="form_style"
              />
            </div>

            <div className="form_group">
              <label htmlFor="email" className="sub_title">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Entrez votre adresse email"
                className="form_style"
              />
            </div>

            <div className="form_group">
              <label htmlFor="date" className="sub_title">
                Date du rendez-vous
              </label>
              <input id="date" type="date" className="form_style" />
            </div>

            <div className="form_group">
              <label htmlFor="message" className="sub_title">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                placeholder="Décrivez votre demande"
                className="form_style"
                style={{ height: "100px", resize: "vertical" }}
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Envoyer la demande
            </button>

            <p>
              Vous avez déjà un compte ?
              <a href="../../views/auth/Login.js" className="link">
                {" "}
                Connectez-vous ici
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
