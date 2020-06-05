import React from "react";
import FullName from "./profil/FullName";
import ProfilPhoto from "./profil/ProfilPhoto";
import Addresse from "./profil/Address";

const Main = () => {
  return (
    <div className="profilContainer">
      <FullName />
      <ProfilPhoto />
      <Addresse />
    </div>
  );
};

export default Main;

