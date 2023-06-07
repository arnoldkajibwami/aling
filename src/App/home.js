import React from "react";
import Aboutcomponent from "./AboutComponent";
import ContactContainer from "./ContactContainer"
import ServiceContainer from "./ServiceContainer";
import Servicecarousel from "./Servicecarousel";

export default function Home() {
   return (
      <>
         <section className="homebg">
            <div className="" >
               <Servicecarousel />
            </div>
         </section>
         <Aboutcomponent />
         <ServiceContainer />
         <ContactContainer />
      </>
   );
}