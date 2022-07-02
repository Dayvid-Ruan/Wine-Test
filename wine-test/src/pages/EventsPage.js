import React from "react";
import { Mensage} from "../styles/NotImplementedStyles";
import NotImplemented from "../components/NotImplemted";
import Header from "../components/Header";

function EventsPage () {
  return(
    <div>
      <Header />
      <Mensage>
        <NotImplemented />
      </Mensage>
    </div>
  );
}

export default EventsPage;