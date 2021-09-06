import React from "react";
import batman from "../imgs/batman.jpg";
import got from "../imgs/got.jpg";
import lord from "../imgs/lord.jpg";
import casaPapel from "../imgs/casa-papel.jpg";
import tron from "../imgs/tron.jpg";
import rambo from "../imgs/rambo.jpg";
import interestelar from "../imgs/interestlar.jpg";

export default function Movie({ title }) {
  const hoverMovie = () => {
    const fila = document.querySelector(".contenedor-carousel");
    const peliculas = document.querySelectorAll(".pelicula");

    peliculas.forEach((pelicula) => {
      pelicula.addEventListener("mouseenter", (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
          peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
          elemento.classList.add("hover");
        }, 300);
      });
    });

    fila.addEventListener("mouseleave", () => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
    });
  };

  const imgSrc = (titulo) => {
    let img = "";
    switch (titulo) {
      case "lord":
        img = lord;
        break;

      case "interestelar":
        img = interestelar;
        break;
      case "got":
        img = got;
        break;
      case "casaPapel":
        img = casaPapel;
        break;

      case "rambo":
        img = rambo;
        break;

      case "tron":
        img = tron;
        break;
      default:
        img = batman;
        break;
    }

    return img;
  };
  return (
    <div className="pelicula">
      <img
        alt={title}
        src={imgSrc(title)}
        onMouseEnter={() => {
          hoverMovie();
        }}
      />
    </div>
  );
}
