import React from "react";
import logo from "../logo_ticket_tac.png";

export default class updateUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    var axios = require("axios");
    var data = JSON.stringify({
      username: this.state.username,
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      zipcode: this.state.zipcode,
      city: this.state.city,
      birthday: this.state.birthday,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      password: this.state.password,
    });
    const id = this.props.match.params._id;
    console.log(typeof id);
    var config = {
      method: "put",
      url: "http://localhost:3000/users/" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(data);
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
              <img src={logo} className="App-logo" alt="logo" title="Accueil"/>
            </a>
          </div>
          <div class="ml-64 flex flex-col space-y-4 mt-12 text-lg">
            <label>
              Utilisateur :
              <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
                type="text"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Nom de famille :
              <input
                class="border-2 border-black rounded-lg ml-9 h-10 pl-2"
                type="text"
                value={this.state.lastname}
                onChange={(e) => this.setState({ lastname: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Prénom :
              <input
                class="border-2 border-black rounded-lg ml-24 h-10 pl-2"
                type="text"
                value={this.state.firstname}
                onChange={(e) => this.setState({ firstname: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Mot de passe :
              <input
                class="border-2 border-black rounded-lg ml-12 h-10 pl-2"
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Code postal :
              <input
                class="border-2 border-black rounded-lg ml-16 h-10 pl-2"
                type="text"
                value={this.state.zipcode}
                onChange={(e) => this.setState({ zipcode: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Ville :
              <input
                class="border-2 border-black rounded-lg ml-32 h-10 pl-2"
                type="text"
                value={this.state.city}
                onChange={(e) => this.setState({ city: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Date de naissance :
              <input
                class="border-2 border-black rounded-lg ml-3 h-10 pl-2 w-60"
                type="date"
                value={this.state.birthday}
                onChange={(e) => this.setState({ birthday: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Email :
              <input
                class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>
            <label>
              Portable : 
              <input
                class="border-2 border-black rounded-lg ml-24 h-10 pl-2"
                type="phonenumber"
                value={this.state.phonenumber}
                onChange={(e) => this.setState({ phonenumber: e.target.value })}
                placeholder="Vide si non modifié"
              />
            </label>

            <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.updateUser}>
              Envoyer
            </button>
          </div>
        </div>
    );
  }
}
