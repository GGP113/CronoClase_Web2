import React from "react";
import NavBarEstudiante from "../components/NavBarEstudiante";
import { Footer } from "../components/Footer";
import InfoMateria from "../components/InfoMateria";
import "../styles/PageMaterias.css";
import BannerMaterias from "../components/BannerMaterias";

export default function PageMaterias() {
	const materias = [
		"Matemáticas",
		"Lengua",
		"Historia",
	];

	return (
		<div className="page-container">
			<NavBarEstudiante />

			<main className="page-materias-container">
				<h1 className="page-title">Mis Materias.</h1>
				<BannerMaterias />

				<section className="materias-grid">
					{materias.map((m) => (
						<InfoMateria
							key={m}
							nombre={m}
							descripcion={`Descripción breve de ${m}`}
							evaluaciones={["Prueba parcial", "Recuperatorio"]}
						/>
					))}
				</section>
			</main>

			<Footer />
		</div>
	);
}