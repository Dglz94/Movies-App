import React from "react";

export default function Navbar() {
  return (
		<div className="contenedor">
			<h2 className="logotipo">Movies App</h2>
			<nav>
				<a href="#" className="activo">Inicio</a>
				<a href="#">Programas</a>
				<a href="#">Películas</a>
				<a href="#">Más Recientes</a>
				<a href="#">Mi lista</a>
			</nav>
		</div>
  );
}
