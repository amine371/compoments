import  React from 'react' ;
import  fullName  from  './profil/FullName' ;
import  ProfilPhoto from'./profil/ProfilPhoto' ;
import   Address  from  './profil/Address';
import  './Main.css' ;
 profil  const = ()=>{
  retour(
    <div className = "profilContainer" >
    <FullName/>
    <ProfilPhoto/>
    <Adresse/>
    </div>
  ) ;
}

export default profil ;
