import React, { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Carousel() {
  const [movies, setMovies] = useState([
    { movie: "batman", url: "../imgs/batman.jpg" },
    { movie: "casaPapel", url: "../imgs/casa-papel.jpg" },
    { movie: "got", url: "../imgs/got.jpg" },
    { movie: "interestelar", url: "../imgs/interestlar.jpg" },
    { movie: "lord", url: "../imgs/lord.jpg" },
    { movie: "rambo", url: "../imgs/rambo.jpg" },
    { movie: "tron", url: "../imgs/tron.jpg" },
    { movie: "batman", url: "../imgs/batman.jpg" },
    { movie: "casa de papel", url: "../imgs/casa-papel.jpg" },
    { movie: "got", url: "../imgs/got.jpg" },
    { movie: "interestelar", url: "../imgs/interestlar.jpg" },
    { movie: "lord", url: "../imgs/lord.jpg" },
    { movie: "rambo", url: "../imgs/rambo.jpg" },
    { movie: "tron", url: "../imgs/tron.jpg" },
  ]);

  const movimientoDerecha = () => {
    const fila = document.querySelector(".contenedor-carousel");
    const flechaDerecha = document.getElementById("flecha-derecha");
    flechaDerecha.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;
      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });
  };

  const movimientoIzq = () => {
    const fila = document.querySelector(".contenedor-carousel");
    const flechaIzquierda = document.getElementById("flecha-izquierda");

    flechaIzquierda.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;

      const indicadorActivo = document.querySelector(".indicadores .activo");
      if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add("activo");
        indicadorActivo.classList.remove("activo");
      }
    });
  };

  const pagination = () => {
    const fila = document.querySelector(".contenedor-carousel");
    const numeroPaginas = Math.ceil(movies.length / 5);
    for (let i = 0; i < numeroPaginas; i++) {
      const indicador = document.createElement("button");

      if (i === 0) {
        indicador.classList.add("activo");
      }

      document.querySelector(".indicadores").appendChild(indicador);
      indicador.addEventListener("click", (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document
          .querySelector(".indicadores .activo")
          .classList.remove("activo");
        e.target.classList.add("activo");
      });
    }
  };

  useEffect(() => {
    pagination();
  }, [movies]);

  return (
    <div className="peliculas-recomendadas contenedor">
      <div className="contenedor-titulo-controles">
        <h3>Películas Recomendadas</h3>
        <div className="indicadores"></div>
      </div>
      <div className="contenedor-principal">
        <button
          id="flecha-izquierda"
          className="flecha-izquierda"
          onClick={() => movimientoIzq()}
        >
          <i className="fa fa-angle-left"></i>
        </button>

        <div className="contenedor-carousel">
          <div className="carousel">
            {movies.map((movie, index) => {
              return <Movie key={movie.movie + index} title={movie.movie}/>;
            })}
          </div>
        </div>
        <button
          id="flecha-derecha"
          className="flecha-derecha"
          onClick={() => movimientoDerecha()}
        >
          <i className="fa fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}
