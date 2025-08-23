import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  // Données pour les villes tunisiennes avec images locales
  const tunisianCities = [
    {
      name: "Hammamet",
      image: "assets/img/hammamet.jpg",
      link: "/hammamet"
    },
    {
      name: "Sousse",
      image: "assets/img/sousse.jpg",
      link: "/sousse"
    },
    {
      name: "Monastir",
      image: "assets/img/monastir.jpg",
      link: "/monastir"
    },
    {
      name: "Mahdia",
      image: "src/assets/img/mahdia.jpg",
      link: "/mahdia"
    }
  ];

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1950&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-755 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Trouvez votre logement idéal ou louez votre bien en toute
                    simplicité.
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      ✅ Recherche intelligente
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Parcourez les annonces par type, lieu, budget ou critères
                      spécifiques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      🧾 Gestion des annonces
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Les propriétaires publient, modifient et suppriment leurs
                      annonces facilement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      📆 Prise de rendez-vous en ligne
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Les locataires peuvent demander des visites et recevoir
                      une confirmation par email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  🏡 Services Premium Rentiya
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Avec Rentiya, trouvez ou gérez des biens en toute saison. Que
                  ce soit en été ou en hiver, notre système reste fluide, rapide
                  et réactif. Nous nous occupons des détails, vous profitez des
                  résultats.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Rentiya
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="Remise de clé"
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section des villes tunisiennes */}
        <section className="pt-20 pb-48 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-16">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Principales Villes Tunisiennes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Découvrez nos offres dans les villes les plus prisées de Tunisie
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              {tunisianCities.map((city, index) => (
                <div key={index} className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <div className="shadow-lg rounded-lg bg-white overflow-hidden mb-6">
                      <img
                        alt={city.name}
                        src={city.image}
                        className="w-full h-48 object-cover"
                      />
                      <div className="py-4 px-6">
                        <h3 className="text-xl font-bold mb-2">{city.name}</h3>
                        <Link
                          to={city.link}
                          className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        >
                          En savoir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nos experts</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Rencontrez notre équipe passionnée qui vous accompagne pour votre location de maison ou voiture en toute sérénité.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ali Youssef</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Développeur Web
                    </p>
                    <div className="mt-6">
                      <button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="bg-lightBlue-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Lina Benali</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Digital
                    </p>
                    <div className="mt-6">
                      <button className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-google"></i>
                      </button>
                      <button className="bg-lightBlue-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Karim Lahlou</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Designer UI/UX
                    </p>
                    <div className="mt-6">
                      <button className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-google"></i>
                      </button>
                      <button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="bg-blueGray-700 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Sofia Ziani</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Fondatrice & CEO
                    </p>
                    <div className="mt-6">
                      <button className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-google"></i>
                      </button>
                      <button className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button className="bg-blueGray-700 text-white w-8 h-8 rounded-full mr-1 mb-1">
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}