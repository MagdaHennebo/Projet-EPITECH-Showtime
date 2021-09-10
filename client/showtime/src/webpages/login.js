import React from "react";
import logo from "../logo_ticket_tac.png";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(user) {
    var axios = require("axios");
    var data = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    var config = {
      method: "post",
      url: "http://localhost:3000/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const token = JSON.stringify(response.data.access_token);
        const userid = JSON.stringify(response.data.userId);
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", token);
        localStorage.setItem("User_id", userid);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div class="ml-64">
        <div class="w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      <div class="grid grid-rows-2 space-y-6 mt-20 border-2 border-red-700 rounded-lg ml-8 mr-72 w-80 text-lg">
      <div class="ml-20 text-3xl text-red-700 font-bold underline">
            <br />
            Connexion
          </div>
        <label class="ml-10 mt-4">
          <p>Email</p>
          <input
            class="h-10 rounded-lg border-2 border-black pl-2"
            placeholder="Jeannot13@msn.com"
            type="text"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </label>
        <label class="ml-10 mt-4">
          <p>Mot de passe</p>
          <input
            class="h-10 rounded-lg border-2 border-black pl-2"
            placeholder="Jeannotdu13"
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </label>
          <br/>
        <div>
          <button class="bg-red-700 w-28 ml-24 p-2 rounded-lg text-white font-bold col-span-2 text-xl" type="submit" onClick={this.loginUser}>
            Submit
          </button>
        </div>
          <br/>
      </div>
    </div>
    );
  }
}
