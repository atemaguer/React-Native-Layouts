import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import EventsList from "../components/events";

const AppNavigator = createStackNavigator({
    Events:{
        screen:EventsList,
        navigationOptions:{
            header:null
        }
    }
})

export default createAppContainer(AppNavigator);