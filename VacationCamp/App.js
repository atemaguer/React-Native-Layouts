import React, {Component} from 'react';
import { StatusBar } from "react-native";

import AppNavigator from "./src/routes";

export default class App extends Component{
  render() {
    return (
      <React.Fragment>
          <StatusBar 
              hidden
          />
          <AppNavigator />
      </React.Fragment>
    );
  }
}
