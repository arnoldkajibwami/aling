import React from "react";
import Breadcrumb from "./Breadcrumb";
import ServiceContainer from "./ServiceContainer";

export default function Service() {
  return (
    <>
      <Breadcrumb page={"Service"} />
      <div style={{ height: "100px" }}></div>
      <ServiceContainer />
    </>
  );
}