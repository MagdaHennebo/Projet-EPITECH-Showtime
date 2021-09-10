import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo_ticket_tac.png";

export default class AdminEvents extends React.Component {
  state = {
    events: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:3000/events",
    };

    axios(config)
      .then((response) => {
        this.setState({ events: response.data });
        console.log(JSON.stringify(this.state.events));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteEvent(event) {
    var axios = require("axios");
    var config = {
      method: "delete",
      url: `http://localhost:3000/events/${event._id}`,
      headers: {},
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
      <div class="ml-64 w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" title="Accueil"/>
          </a>
        <Link to="/admincreateevents" class="hover:underline text-xl font-bold text-red-700">Créer un Evenement</Link>
        {this.state.events.map((events) => {
          return (
            <div class="flex p-3 text-lg">
              <div key={events._id} class="">
                <div class="flex flex-row">
                  {events.artist.artist_name}{" "} |
                  | {events.category.category_name}
                </div>
                  <img src={events.artist.photo} class="w-24" alt={events.artist.artist_name}></img>
                  <div>
                    {events.location.location_name}
                  </div>
                <button type="button" class="hover:underline" onClick={() => this.deleteEvent(events)}>
                  Supprimer |
                </button>
                <button type="button" class="hover:underline" onClick={() => this.props.history.push(`/update/event/${events._id}`)}>
                  | Modifier
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
