/*eslint-disable*/
import React from "react";

import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";

import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${require("assets/img/maison-isolee-d-art-numerique.jpg").default})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xll font-bold mb-4">Bienvenue sur RentiyA</h1>
          <p className="text-lgg mb-8">
            Trouvez votre maison de rêve dès maintenant
          </p>
   <div>
  <Link to="/Landing" className="btn">
  <i className="animation"></i>
  Découvrir
  <i className="animation"></i>
</Link>
</div>
          </div>
      </section>
      <section className="mt-4 py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center text-center">
      {/* Carte 1 */}
      <div className="w-full md:w-4/12 px-4 mb-12">
      <img
                  alt="..."
                  src={require("assets/img/listings.jpg").default}
                 
                />
        <h5 className="text-xl font-bold mb-2">Annonces complètes</h5>
        <p className="text-blueGray-500">
          Parcourez et postulez à plus d’un million d’annonces en location courte ou longue durée partout en tunisie.
        </p>
      </div>

      {/* Carte 2 */}
      <div className="w-full md:w-4/12 px-4 mb-12">
         <img
                  alt="..."
                  src={require("assets/img/ressources.jpg").default}
                 
                />
        <h5 className="text-xl font-bold mb-2">Ressources utiles</h5>
        <p className="text-blueGray-500">
          Prenez des décisions éclairées grâce aux tendances du marché, guides de villes, calculateur de budget et évaluations d’experts.
        </p>
      </div>

      {/* Carte 3 */}
      <div className="w-full md:w-4/12 px-4 mb-12">
        <img
                  alt="..."
                  src={require("assets/img/peace.jpg").default}
              
                />
        <h5 className="text-xl font-bold mb-2">Esprit tranquille</h5>
        <p className="text-blueGray-500">
          Louez en toute confiance : nous nous engageons à fournir des annonces vérifiées et à garantir la transparence.
        </p>
      </div>
    </div>
  </div>
</section>






        {/*<div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>*/}
      
              {/* <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />  */}
                {/* <blockquote className="relative p-8 mb-4"> */}
                
                    {/* <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon> */}
              
                  {/* <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4> */}
                  {/* <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p> */}
        
        
                      {/* <h6 className="text-xl mb-1 font-semibold">
                        CSS Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p> */}
                
                      {/* <h6 className="text-xl mb-1 font-semibold">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p> */}
                  
                      {/* <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                      <p className="mb-4 text-blueGray-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p> */}
                
                      {/* <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p> */}
              

        {/* <div className="container mx-auto overflow-hidden pb-20"> */}
          {/* <div className="flex flex-wrap items-center"> */}
            {/* <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"> */}
              {/* <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div> */}
              {/* <h3 className="text-3xl mb-2 font-semibold leading-normal">
                CSS Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p> */}
              {/* <div className="block pb-6"> */}
                {/* <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span> */}
              {/* </div> */}
              {/* <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a> */}
            {/* </div> */}

            {/* <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"> */}
                {/* <img
                  alt="..."
                  src={require("assets/img/component-btn.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                /> */}
                {/* <img
                  alt="..."
                  src={require("assets/img/component-info-card.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-info-2.png").default}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                /> */}
              {/* </div>
            </div> */}
          {/* <div> */}

          {/* <div className="flex flex-wrap items-center pt-32"> */}
            {/* <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32"> */}
              {/* <div className="justify-center flex flex-wrap relative"> */}
                {/* <div className="my-4 w-full lg:w-6/12 px-4"> */}
{/*                   
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      
                      <p className="text-lg text-white mt-4 font-semibold">
                        ReactJS
                      </p>
                    </div>
                  </a> */}
                  
                    {/* <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                 
                    </div> */}
                 
                {/* </div> */}
                {/* <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16"> */}
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    
                  </a> */}
                 
                    {/* <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Angular
                      </p>
                    </div> */}
                
                  {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                  </a> */}
                {/* </div>
              </div>
            </div> */}

          
          {/* </div>
        </div> */}

              
                
               
              
                  
                
                 
              
                   
                      {/* <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div> */}
                      {/* <div>
                        <h4 className="text-blueGray-500">
                          Dynamic Javascript Components
                        </h4>
                      </div> */}
                    
                
            {/* <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div> */}
            
        

    
     

      <Footer />
    </>
  );
}
