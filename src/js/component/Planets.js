import React, { useContext, useEffect } from "react";
import "../../styles/planets.css"
import Planetimg from "../../img/Planetimg.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Planets = () => {
    const {store, actions} = useContext(Context);
    useEffect(() => {
        actions.getPlanets();
    }, []);

    return (
     <>
                 {store.planets.map((value, i) => (
                    <div key={i} className="card m-1 row flex-row bg-white mt-5" style={{ width: "23rem", height: "31rem" }}>
                         <div className="col-md-12  ">
                            <img src={Planetimg} className="card-img-top pt-2" alt="perfil" />
                            <div className="card-body">
                                <p className="text-card text-dark">Name: {value.name}</p>
                                <div className="cardbuttons">
                                    <Link className="btn btn-primary  ms-2 " to={"planetsdetails/" + value.uid}>
                                        Learn More!
                                    </Link>
                                    <button type="button" className="btn btn-outline-warning  ms-2 " onClick={() => actions.addfavorites(value.name)}>
                                    <i className="far fa-heart"></i>
                                    </button>                             
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
        </>
    
    )
}
export default Planets;