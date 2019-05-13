import React from 'react'
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1d1d23"
    },
    headerContainer: {
        flexDirection:"row",
        marginTop:60,
        marginBottom:20,
        marginHorizontal:20,
        justifyContent:"space-between",
        alignItems:"center"
    },
    image: {
        height:50,
        width:50,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#ababae"
    },
    eventsListcontainer: {
        flex:1,
        marginTop:10
    },
    eventContainer:{ 
        flexDirection:"row",
        backgroundColor:"#292b34",
        paddingVertical:20,
        paddingHorizontal:10,
        borderRadius:5,
        marginHorizontal:15,
        elevation:10,
        marginBottom:15
    }
})