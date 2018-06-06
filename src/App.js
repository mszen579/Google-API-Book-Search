import React, { Component } from "react";
import Home from "./Home";
import Script from "react-load-script";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom"; //this is for routing
//js and css
import "./components/style/css/bootstrap.min.css";
import "./components/style/css/font-awesome.min.css";
import "./components/style/css/superslides.css";
import "./components/style/css/slick.css";

import "./components/style/css/animate.css";
import "./components/style/css/jquery.tosrus.all.css";
import "./components/style/css/themes/default-theme.css";
import "./components/style/style.css";
import Books from "./Books";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { scriptError: "", scriptLoaded: "" };

    this.handleScriptError = this.handleScriptError.bind(this);
    this.handleScriptCreate = this.handleScriptCreate.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }

  handleScriptCreate() {
    this.setState({ scriptLoaded: false });
  }

  handleScriptError() {
    this.setState({ scriptError: true });
  }

  handleScriptLoad() {
    this.setState({ scriptLoaded: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="world" style={{ color: "#3b5998", fontWeight: "900" }}>
            Google book search
          </h1>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/allBooks/:keyword" component={Books} />
              <Route
                render={function() {
                  return (
                    <p>
                      {" "}
                      404 Page Not Found
                      <br />
                      <Link className="btn nav-link btn-success" to="/">
                        Back to Homepage
                      </Link>
                    </p>
                  );
                }}
              />
            </Switch>
          </BrowserRouter>

          <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="components/UserPanel/js/queryloader2.min.js"
            type="text/javaScript"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="components/UserPanel/js/wow.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="components/UserPanel/js/bootstrap.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="components/UserPanel/js/slick.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="components/UserPanel/js/jquery.easing.1.3.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <Script
            url="components/UserPanel/js/jquery.animate-enhanced.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <Script
            url="components/UserPanel/js/jquery.superslides.min.js"
            type="text/javascript"
            charset="utf-8"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            url="https://cdn.rawgit.com/pguso/jquery-plugin-circliful/master/js/jquery.circliful.min.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />

          <Script
            type="text/javascript"
            language="javascript"
            url="components/UserPanel/js/jquery.tosrus.min.all.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
          <Script
            url="components/UserPanel/js/custom.js"
            onCreate={this.handleScriptCreate.bind(this)}
            onError={this.handleScriptError.bind(this)}
            onLoad={this.handleScriptLoad.bind(this)}
          />
        </header>
      </div>
    );
  }
}

export default App;
