import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import Products from "../components/products";
import ProductDetail from "../components/product";

const AppNavigator = createStackNavigator({
    Products:{
        screen:Products,
        navigationOptions:{
            header:null
        }
    },
    ProductDetail:{
        screen:ProductDetail,
        navigationOptions:{
            header:null
        }
    }
},
{
    initialRouteName:"Products"
})

export default createAppContainer(AppNavigator)