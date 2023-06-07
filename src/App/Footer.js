import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate()
    function BackToTOP() {
        window.scrollTo(0, 0)

        navigate("#")
    }
    return (
        <>
            <section id="footer" className="mt-5 footer">

                <div className="footer-content position-relative">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>Groupe Aling</h3>
                                    <p>
                                        Goma <br />
                                        Nord-kivu /RDC<br /><br />
                                        <strong>Phone:</strong> +243 999 888 777<br />
                                        <strong>Email:</strong> groupealing@gmail.com<br />
                                    </p>
                                    <div className="social-links d-flex mt-3">
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></Link>
                                        <Link href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Links</h4>
                                <ul>
                                    <li><Link to="/home " className="nav-link"> Accueil</Link></li>
                                    <li><Link to="/about " className="nav-link"> Apropos</Link></li>
                                    <li><Link to="/service " className="nav-link"> Service</Link></li>
                                    <li><Link to="/contact " className="nav-link"> Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-legal text-center position-relative">
                    <div className="container">
                        <div onClick={BackToTOP} className="m-3 backtotop">Up</div>
                        <div className="copyright">
                            &copy; Copyright <strong><span><Link to="www.gaps.netlify.app" className="Madename">Groupe Aling</Link></span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Made by <Link to="https://auctux.com/" className="Madename">Auctux</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}