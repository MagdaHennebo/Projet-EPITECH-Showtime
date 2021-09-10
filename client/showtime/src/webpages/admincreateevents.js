import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo_ticket_tac.png";

export default class CreateEventAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      location: "",
      category: "",
      event_name: "",
      event_date: "",
      description: "",
      photo: "",
      price: "",
      artists: [],
      locations: [],
      categories: [],
    };

    this.createEvent = this.createEvent.bind(this);
  }

  componentDidMount() {
    var axios = require("axios");

    var configartists = {
      method: "get",
      url: "http://localhost:3000/artists",
    };

    axios(configartists)
      .then((response) => {
        this.setState({ artists: response.data });
        console.log(JSON.stringify(this.state.artists));
      })
      .catch(function (error) {
        console.log(error);
      });

    var configlocations = {
      method: "get",
      url: "http://localhost:3000/locations",
    };

    axios(configlocations)
      .then((response) => {
        this.setState({ locations: response.data });
        console.log(JSON.stringify(this.state.locations));
      })
      .catch(function (error) {
        console.log(error);
      });

    var configcategories = {
      method: "get",
      url: "http://localhost:3000/categories",
    };

    axios(configcategories)
      .then((response) => {
        this.setState({ categories: response.data });
        console.log(JSON.stringify(this.state.categories));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  createEvent() {
    var axios = require("axios");
    var data = JSON.stringify({
      artist: this.state.artist,
      location: this.state.location,
      category: this.state.category,
      event_name: this.state.name,
      event_date: this.state.date,
      description: this.state.description,
      photo: this.state.photo,
      price: this.state.price,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/events",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        <Link to="/adminevents"></Link>;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div class="ml-64 w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" title="Accueil" />
          </a>
        </div>
        <div class="flex flex-col space-y-4 ml-64 text-lg mt-12">
          <select
            class="w-64 rounded-lg h-10 border-2 border-red-700 bg-white"
            onChange={(e) => this.setState({ artist: e.target.value })}
          >
            <option value="" selected disabled>
              Sélectionner un artiste
            </option>
            {this.state.artists.map((artists) => {
              return (
                <option
                  key={artists._id}
                  value={artists._id}
                  onChange={(e) => this.setState({ artist: artists._id })}
                >
                  {artists.artist_name}
                </option>
              );
            })}
          </select>

          <select
            class="w-64 rounded-lg h-10 border-2 border-red-700 bg-white"
            onChange={(el) => this.setState({ location: el.target.value })}
          >
            <option value="" selected disabled>
              Sélectionner un lieu
            </option>
            {this.state.locations.map((locations) => {
              return (
                <option
                  key={locations._id}
                  value={locations._id}
                  onChange={(el) => this.setState({ location: locations._id })}
                >
                  {locations.location_name}
                </option>
              );
            })}
          </select>

          <select
            class="w-64 rounded-lg h-10 border-2 border-red-700 bg-white"
            onChange={(ele) => this.setState({ category: ele.target.value })}
          >
            <option value="" selected disabled>
              Sélectionner une categorie
            </option>
            {this.state.categories.map((categories) => {
              return (
                <option
                  key={categories._id}
                  value={categories._id}
                  onChange={(el) => this.setState({ category: categories._id })}
                >
                  {categories.category_name}
                </option>
              );
            })}
          </select>

          <label>
            Nom de l'évènement :
            <input
              class="border-2 border-black rounded-lg ml-2 h-10 pl-2"
              type="text"
              value={this.state.event_name}
              onChange={(e) => this.setState({ event_name: e.target.value })}
            />
          </label>
          <label>
            Date de l'évènement :
            <input
              class="border-2 border-black rounded-lg ml-2 w-60 h-10 pl-2"
              type="date"
              value={this.state.event_date}
              onChange={(e) => this.setState({ event_date: e.target.value })}
            />
          </label>
          <label>
            Description :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="text"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </label>
          <label>
            Photo :
            <input
              class="border-2 border-black rounded-lg ml-32 h-10 pl-2"
              type="text"
              value={this.state.photo}
              onChange={(e) => this.setState({ photo: e.target.value })}
            />
          </label>
          <label>
            Prix
            <input
              type="text"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </label>

          <button
            class="text-red-700 font-bold text-2xl hover:underline"
            value="Envoyer"
            method="post"
            onClick={this.createEvent}
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}
