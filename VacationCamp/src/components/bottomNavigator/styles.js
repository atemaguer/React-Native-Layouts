import React from 'react'
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:height*0.12,
        backgroundColor:"#fff",
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
        alignItems:"center",
        position:"relative"
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
    tabText: {
        color:"#bababb", 
        fontSize:13
    },
    activeTab:{
        position:"absolute",
        height:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        backgroundColor:"#f881b0",
        bottom:0,
        left:5,
        right:5
    },
    activeTabText: {
        color:"#f881b0"
    }

})