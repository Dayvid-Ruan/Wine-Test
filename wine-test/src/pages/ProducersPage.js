import React from "react";
import Header from "../components/Header";
import NotImplemented from "../components/NotImplemted";
import { Mensage } from "../styles/NotImplementedStyles";

function ProducersPage () {
  return(
    <div>
      <Header />
      <Mensage>
        <NotImplemented />
      </Mensage>
    </div>
  );
}

export default ProducersPage;