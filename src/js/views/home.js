import React, { useEffect, useContext } from "react";
import { Characters } from "../../js/component/Characters";
import { Planets } from "../../js/component/Planets";
import "../../styles/home.css";

export const Home = (props) => {
  return (
    <>
      <div className="container ">
        <div className="div_text_home w-100 mt-5">
          <h1 className="text_home text-danger">Characters</h1>
        </div>
        <div className="row wrapper_characters">
          <Characters className="mt-5" />
        </div>
        <div className="div_text_home w-100 mt-5">
          <h1 className="text_home text-danger">Planets</h1>
        </div>
        <div className="row wrapper_planets">
          <Planets classname="mb"/>
        </div>
      </div>
    </>
  );
};

export default Home;
