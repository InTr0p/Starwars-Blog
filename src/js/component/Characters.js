import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Characters.css";
import Charactersimg from "../../img/Charactersimg.jpg";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
  }, []);
  return (
    <>
    
      {store.characters.map((value, i) => (
        <div
          key={i}
          className="card border-1 m-1 mt-5  row flex-row bg-white "
          style={{ width: "23rem", height: "31rem" }}
        >
          <div className="col-md-12 ">
   
          <img src={Charactersimg} className="card-img-top pt-2" alt="perfil" />
          <div className="card-body">
            <p className="text-card text-dark">Name: {value.name}</p>
            <div className="cardbuttons">
              <Link
                className="btn btn-primary ms-2"
                to={"charactersdetails/" + value.uid}
              >
                Learn More!
              </Link>
              <button
                type="button"
                className="btn btn-outline-warning "
                onClick={() => actions.addfavorites(value.name)}
              >
                <i className="far fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        </div>
        
      ))}
    </>
  );
};
export default Characters;
