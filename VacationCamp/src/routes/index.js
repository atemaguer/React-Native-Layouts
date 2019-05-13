import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import List from "../components/List";
import HomeDetail from "../components/HomeDetail";

const AppNavigator = createStackNavigator({
    List:{
        screen:List,
        
    },
    HomeDetail:{
        screen:HomeDetail,
    }
},{
    defaultNavigationOptions: {
        header:null
    }
});

export default createAppContainer(AppNavigator);