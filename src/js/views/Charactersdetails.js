import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Charactersimg from "../../img/Charactersimg.jpg";
import "../../styles/Charactersdetails.css";
import { Context } from "../store/appContext";

export const Charactersdetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getCharactersdetails(params.id);
  }, []);
  if (store.charactersdetails) {
    return (
      <div className="container contenedor">
		  	<div className="characterDetails w-100 mt-4">
		<h1 className="text-danger">character details</h1></div>
        <div className="card m-2 text-center" style={{ width: "80rem" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={Charactersimg} className="img-fluid rounded-start" />
            </div>
			<div className="col-md-8">
            <div className="card-body mt-5">
              <h1 className="card-title text-dark fs-1">
                {store.charactersdetails.properties.name}
              </h1>{" "}
              <p className="text-dark fs-2">
                <strong>Birth Year:</strong>{" "}
                {store.charactersdetails.properties.birth_year}
              </p>
              <p className="text-dark fs-2">
                <strong>Height:</strong>{" "}
                {store.charactersdetails.properties.height}
              </p>
              <p className="text-dark fs-2">
                <strong>Mass:</strong> {store.charactersdetails.properties.mass}
              </p>
              <p className="text-dark fs-2">
                <strong>Hair Color:</strong>{" "}
                {store.charactersdetails.properties.hair_color}
              </p>
              <p className="text-dark fs-2">
                <strong>Skin Color:</strong>{" "}
                {store.charactersdetails.properties.skin_color}
              </p>
              <p className="text-dark fs-2">
                <strong>Eyes Color:</strong>{" "}
                {store.charactersdetails.properties.eye_color}
              </p>
              <p className="text-dark fs-2">
                <strong>Gender:</strong>{" "}
                {store.charactersdetails.properties.gender}
              </p>
            </div>
          </div>
        </div>
      </div>
	  </div>
    );
  } else {
    return <div>loading data</div>;
  }
};



