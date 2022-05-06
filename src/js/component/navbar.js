import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import "../../styles/navbar.css";
import logoImagen from "../../img/startwars.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbars navbar-expand-lg px-5" >
			<div className="container-fluid">
			<Link to={"/"}>
					<img src={logoImagen}  width="100" height="100" className="pb-4" />
					</Link>
				<div className="collapse navbar-collapse float-end" id="navbarNav">
	
					<div className="dropdown mt-3">
						<a className="nav-link dropdown-toggle text-white bg-primary btn btn-primary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
							Favorites <Badge bg="transparent">{store.favorites.length}</Badge>
						</a>
						<ul className="dropdown-menu text-secondary" aria-labelledby="navbarDropdown">
							{store.favorites.map((value, key) => (
								<li><a key={key} className="dropdown-item" href="#/action-4">{value}{" "}
								<i onClick={() => actions.deletefavorites(key)} className="fas fa-trash-alt" /></a></li>
							))}
						</ul>
					</div>  
				</div>
			</div>
		</nav>
	);
};

