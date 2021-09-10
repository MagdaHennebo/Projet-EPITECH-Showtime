import React from "react";
import logo from "../logo_ticket_tac.png";

const Admin = () => {
  return (
    <div>
      <div className="App" >
        <div class="ml-64 w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" title="Accueil"/>
          </a>
        </div>
        <div class="ml-64 mt-12 w-72 flex flex-col space-y-5 text-lg">
          <p class="font-bold text-2xl underline">CRUDs</p>
          <a class="hover:underline" href="/users"> Utilisateurs </a>
          <a class="hover:underline" href="/"> Categories </a>
          <a class="hover:underline" href="/"> Artistes </a>
          <a class="hover:underline" href="/adminevents"> Evènements </a>
          <a class="hover:underline" href="/"> Localisations </a>
          <a class="hover:underline" href="/"> Tickets </a>
          <a class="hover:underline" href="/"> Voir listes de souhaits/Favoris </a>
        </div>
      </div>
    </div>
  );
};

export default Admin;
