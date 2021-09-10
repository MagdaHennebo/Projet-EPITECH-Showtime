import React from "react";
import logo from "../logo_ticket_tac.png";

export default class createUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      firstname: "",
      zipcode: "",
      city: "",
      birthday: "",
      email: "",
      phonenumber: "",
      password: "",
    };

    this.postRegister = this.postRegister.bind(this);
  }

  postRegister() {
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

    var config = {
      method: "post",
      url: "http://localhost:3000/users/",
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
        <div class="flex flex-col ml-64 mt-10 text-xl space-y-4">
          <label>
            Utilisateur :
            <input
              class="border-2 border-black rounded-lg ml-16 h-10 pl-2"
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </label>
          <label>
            Nom de famille :
            <input
              class="border-2 border-black rounded-lg ml-7 h-10 pl-2"
              type="text"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </label>
          <label>
            Prénom :
            <input
              class="border-2 border-black rounded-lg ml-24 h-10 pl-2"
              type="text"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </label>
          <label>
            Mot de passe :
            <input
              class="border-2 border-black rounded-lg ml-12 h-10 pl-2"
              type="text"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
          <label>
            Code postal :
            <input
              class="border-2 border-black rounded-lg ml-16 h-10 pl-2"
              type="text"
              value={this.state.zipcode}
              onChange={(e) => this.setState({ zipcode: e.target.value })}
            />
          </label>
          <label>
            Ville :
            <input
              class="border-2 border-black rounded-lg ml-32 h-10 pl-2"
              type="text"
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value })}
            />
          </label>
          <label>
            Date de naissance :
            <input
              class="border-2 border-black rounded-lg ml-4 w-64 h-10 pl-2"
              type="date"
              value={this.state.birthday}
              onChange={(e) => this.setState({ birthday: e.target.value })}
            />
          </label>
          <label>
            Email :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Portable :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="phonenumber"
              value={this.state.phonenumber}
              onChange={(e) => this.setState({ phonenumber: e.target.value })}
            />
          </label>

          <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.postRegister}>
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}
