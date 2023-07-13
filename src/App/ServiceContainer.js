import React from "react";

import { MdOutlineAirplaneTicket } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCar } from "react-icons/bi";
import { BiFastForward } from "react-icons/bi";
import { BiDevices} from "react-icons/bi"
import { BiAlbum} from "react-icons/bi"
import { BiBus} from "react-icons/bi"
import { AiOutlineCar} from "react-icons/ai"

export default function serviceContainer() {
   return (
      <>
         <div className="services_section layout_padding">
            <div className="container">
               <h1 className="services_taital">Groupe Aling Services</h1>
               <p className="about_text">Nous offrons différents services</p>
               <div className="services_section_2">
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><MdOutlineAirplaneTicket/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">Vente de billet d'avion national et international</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><BiBus/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">location des voitures et Bus</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                     </div>
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                              <i><BiAnalyse/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">Research and Analytics</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                        <div className="icon_box">
                           <div className="icon_1">
                              {/* <i><BiFastForward/></i> */}
                              <i><BiCar/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">commande de véhicule en ligne</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                     </div>
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                                 <i><BiDevices/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">Vente des appareil Electronic</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                        <div className="icon_box">
                           <div className="icon_1">
                                    <i><AiOutlineCar/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">Dedounement  véhicule</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                     </div>
                     <div className="col-lg-6">
                        <div className="icon_box">
                           <div className="icon_1">
                                 <i><BiAlbum/></i>
                           </div>
                        </div>
                        <h4 className="selection_text">Fourniture bureaux et divers</h4>
                        <p className="ipsum_text">There are many variations of passages of Lorem Ipsum available</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}