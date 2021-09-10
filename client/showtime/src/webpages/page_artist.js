import React from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import logo from '../logo_ticket_tac.png';

export default function PageArtist() {
  const [artists, setPost] = React.useState(null);
  let { _id } = useParams();

  React.useEffect(() => {
    axios.get("http://localhost:3000/artists/" + _id).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!artists) return "Cet artiste n'existe pas !";

  return (
    <div><div>
    <div className="App" class="grid grid-cols-3 grid-rows-1">
        <div class="ml-64 w-72" title="Accueil">
            <a href="/">
                <img src={logo} className="App-logo" alt="logo"/>
            </a>
        </div>
        <div class="flex flex-row">
            <a href= "/listArtists" class=""><img class = "ml-60 w-20 mt-10 filter grayscale" title="Artistes" src="/images/woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4.png" alt="Artistes"></img></a>
            <a href= "/listEvents" class=""><img class = "ml-40 w-16 mt-12" title="Concerts" src="/images/microphone_1f3a4.png" alt="Artistes"></img></a>
        </div>
        <div class="flex flex-cols-4 ml-64">
            <div class="">
                <a href="/page_admin" title="Admin">
                <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </a>            
            </div>
            <div class="">
                <a href="/profile" title="Profil">
                <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </a>            
            </div>
            <div class="">
                <a href="/login" title="Connexion">
                    <svg class="w-8 h-8 float-right mt-16 text-red-700" title = "Login" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                </a>            
            </div>
            <div class="">
                <a href="/register" title="Inscription">
                    <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                </a>            
            </div>
        </div>
    </div>
    <br />
    <div class = "p-8 mx-64 bg-red-700 flex flex-row space-x-4 bg-opacity-80 rounded-lg">
        <div>
            <select name="genre" id="genre" class="rounded-lg h-10 bg-white">
                <option value="genres" selected disabled>Genre de musique</option>
                <option value="rock">Rock</option>
                <option value="rap">Rap</option>
                <option value="classique">Classique</option>
                <option value="rnb">RnB</option>
            </select> 
        </div>
        <div>
            <select name="ville" id="ville" class="rounded-lg h-10 bg-white">
                <option value="ville" selected disabled>Ville</option>
                <option value="marseille">Marseille</option>
                <option value="paris">Paris</option>
                <option value="montpellier">Montpellier</option>
                <option value="aubagne">Aubagne</option>
            </select> 
        </div>
        <div>
            <input type = "text" placeholder="Recherche" class = "rounded-lg recherche h-10"></input>
        </div>
        <button type = "button" class = "rounded-lg search bg-white w-40">Recherche</button>
    </div>
</div>
      <div class ="ml-72 mt-20">
            <div class="text-red-700">
                <h1 class ="font-semibold">{artists.artist_name}</h1>
                <img class="h-72" src={artists.photo} alt={artists.artist_name}/>
                <div class ="font-semibold"> {artists.category.category_name} </div>
      </div>
    </div></div>
  );
}
