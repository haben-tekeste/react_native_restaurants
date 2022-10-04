import React from "react";
import { decode, encode } from "base-64";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/Screens/SearchScreen";
import ResultsShowScreen from "./src/Screens/ResultsShowScreen";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
