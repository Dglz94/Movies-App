import React from "react";

export default function Hero() {
  const title = "Interestelar";
  const description =
    "Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias que tiene un viaje interestelar.";
  return (
    <div className="pelicula-principal">
      <div className="contenedor">
        <h3 className="titulo">{title}</h3>
        <p className="descripcion">{description}</p>
        <button role="button" className="boton">
          <i className="fa fa-play"></i>Reproducir
        </button>
        <button role="button" className="boton">
          <i className="fa fa-info-circle"></i>Más información
        </button>
      </div>
    </div>
  );
}
