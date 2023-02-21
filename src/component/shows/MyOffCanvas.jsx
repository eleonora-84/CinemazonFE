import { useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import "./show.css";

const MyOffCanvas = () => {
  const [showOffCanvas, setOffCanvas] = useState(true);
  const closeOffCanvas = () => {
    setOffCanvas(false);
  };

  return (
      <Offcanvas
        show={showOffCanvas}
        onHide={closeOffCanvas}
        placement="top"
        className="my-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Termini e Condizioni</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Acquistando il biglietto accetti termini e condizioni d'uso. Clicca
          qui (***DA IMPLEMENTARE***) per maggiori informazioni.
        </Offcanvas.Body>
      </Offcanvas>
  );
};
export default MyOffCanvas;
