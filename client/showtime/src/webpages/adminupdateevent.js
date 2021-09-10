import React from "react";
import logo from "../logo_ticket_tac.png";

export default class UpdateEventAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: "",
      location: "",
      category: "",
      price: "",

      artists: [],
      locations: [],
      categories: [],
      events: [],
    };

    this.updateEvent = this.updateEvent.bind(this);
  }
  state = {
    events: [],
  };

  componentDidMount() {
    var axios = require("axios");
    const id = this.props.match.params._id;
    var configeventartist = {
      method: "get",
      url: "http://localhost:3000/events/" + id,
      headers: {},
    };

    axios(configeventartist)
      .then((response) => {
        this.setState({ events: response.data.artist });
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    var configeventlocation = {
      method: "get",
      url: "http://localhost:3000/events/" + id,
      headers: {},
    };

    axios(configeventlocation)
      .then((response) => {
        this.setState({ events: response.data.location });
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    var configeventcategory = {
      method: "get",
      url: "http://localhost:3000/events/" + id,
      headers: {},
    };

    axios(configeventcategory)
      .then((response) => {
        this.setState({ events: response.data.category });
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    var configartists = {
      method: "get",
      url: "http://localhost:3000/artists",
    };

    axios(configartists)
      .then((response) => {
        this.setState({ artists: response.data });
        /* console.log(JSON.stringify(this.state.artists)); */
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
        /* console.log(JSON.stringify(this.state.locations)); */
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
        /* console.log(JSON.stringify(this.state.categories)); */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateEvent() {
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
    const id = this.props.match.params._id;

    var config = {
      method: "put",
      url: "http://localhost:3000/events/" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
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
        {/* {this.state.events.map((events) => {
          return <div key={events._id}> {events._id} </div>;
        })} */}
        <div class="text-lg flex flex-col ml-64 mt-10 space-y-4">
          <div>
            Reselectionner l'artiste, le lieux et la catégorie dans les listes
          </div>
          <select
            class="w-64 rounded-lg h-10 border-2 border-red-700 bg-white"
            onChange={(e) => this.setState({ artist: e.target.value })}
          >
            <option value="" selected disabled>
              {this.state.events.artist_name}
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
            <div>
              {console.log(JSON.stringify(this.state.events.location_name))}
            </div>
            <option value="" selected disabled>
              {this.state.events.location_name}
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
              {this.state.events.category_name}
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
              placeholder={this.state.event_name}
              onChange={(e) => this.setState({ event_name: e.target.value })}
              /* placeholder="Vide si non modifié" */
            />
          </label>
          <label>
            Date de l'évènement :
            <input
              class="border-2 border-black rounded-lg ml-2 h-10 w-60 pl-2"
              type="date"
              value={this.state.event_date}
              onChange={(e) => this.setState({ event_date: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Description :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="text"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Photo :
            <input
              class="border-2 border-black rounded-lg ml-32 h-10 pl-2"
              type="text"
              value={this.state.photo}
              onChange={(e) => this.setState({ photo: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <button
            class="text-red-700 font-bold text-2xl hover:underline"
            value="Envoyer"
            method="post"
            onClick={this.updateEvent}
          >
            Modifier
          </button>
        </div>
      </div>
    );
  }
}
