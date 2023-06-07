import React from "react";
import Aboutcomponent from "./AboutComponent";
import Breadcrumb from "./Breadcrumb";
import TeamContainer from "./TeamContainer"

export default function About() {
    return (
        <>
            <Breadcrumb page={"Apropos"} />
            <Aboutcomponent />
            <TeamContainer />
        </>
    );
}

