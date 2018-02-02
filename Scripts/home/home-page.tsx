import * as  React from 'react';
import * as  ReactDOM from 'react-dom';
import './index.scss';
import { Alerter } from "../utils/alerter";
// Import the application modules.
import { AppComponent } from "./components/app.component";

const ROOT = document.querySelector(".container");
// To bootstrap the application, all we're going to do is render the root component 
// on the main page.
ReactDOM.render(<AppComponent />, ROOT);
