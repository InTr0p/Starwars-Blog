import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Planetimg from "../../img/Planetimg.jpg";
import "../../styles/Planetsdetails.css"


export const Planetsdetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getPlanetsdetails(params.id);
	}, []);
	if (store.planetsdetails) {
	return (
		<div className="container contenedor">
				  	<div className="characterDetails w-100 mt-3">
					  <h1 className="text-danger">planets details</h1></div>
			<div className="card m-2 text-center" style={{ width: "80rem" }}>
				<div className="row g-0">
				<div className="col-md-4">
				<img src={Planetimg} className="img-fluid rounded-start pt-5"/>
				</div>
				<div className="col-md-8">
				<div className="card-body mt-1">
					<h1 className="card-title text-dark fs-1">{store.planetsdetails.properties.name}</h1>{" "}
					<p className="text-dark fs-2">
						<strong>Diametro:</strong> {store.planetsdetails.properties.diameter}
					</p>
					<p className="text-dark fs-2">
						<strong>Periodo de Rotación:</strong> {store.planetsdetails.properties.rotation_period}
					</p>
					<p className="text-dark fs-2">
						<strong>Periodo Orbital:</strong> {store.planetsdetails.properties.orbital_period}
					</p>
					<p className="text-dark fs-2">
						<strong>Gravedad:</strong> {store.planetsdetails.properties.gravity}
					</p>
					<p className="text-dark fs-2">
						<strong>Población:</strong> {store.planetsdetails.properties.population}
					</p>
					<p className="text-dark fs-2">
						<strong>Clima:</strong> {store.planetsdetails.properties.climate}
					</p>
					<p className="text-dark fs-2">
						<strong>Tipo de Terreno:</strong> {store.planetsdetails.properties.terrain}
					</p>
					<p className="text-dark fs-2">
						<strong>Agua Superficial:</strong> {store.planetsdetails.properties.surface_water}
					</p>
					</div>
					</div>
				</div>
			</div>
			</div>
		
	);
	} else {
		return <div>Loading data</div>;
	}
};
