import React from 'react'
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:height*0.1,
        backgroundColor:"#292b34",
        elevation:20
    },
    tabContainer: {
        flex:1,
        paddingHorizontal:15,
        flexDirection:"row", 
        
    },
    tab: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    addButton: {
        position:"absolute",
        backgroundColor:"#f96c77",
        top:-35,
        borderRadius:50,
        height:70,
        width:70,
        justifyContent:"center",
        alignItems:"center",
        elevation:30
    },

})