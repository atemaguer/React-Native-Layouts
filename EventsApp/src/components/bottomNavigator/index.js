import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { styles } from "./styles";

export default class BottomTabNavigator extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    <View style={styles.tab}>
                        <Icon name="home" size={28} color="#42b549" />
                        <Text style={{color:"#42b549", fontSize:13}}>HOME</Text>
                    </View>
                    <View style={styles.tab}>
                        <Icon name="event" size={28} color="#c8c8c8" />
                        <Text style={{color:"#c8c8c8", fontSize:13}}>EVENT</Text>
                    </View>
                    <View style={[styles.tab, {position:"relative"} ]}>
                        
                        <View style={styles.addButton}>
                            <Icon name="add" size={40} color="white" />
                        </View>
                        
                    </View>
                    <View style={styles.tab}>
                        <View style={{position:"relative"}}>
                            <View style={{
                                backgroundColor:"#ffbd00", 
                                height:10, 
                                width:10, 
                                position:"absolute", 
                                borderRadius:50, 
                                right:3, 
                                top:5, 
                                zIndex:4, 
                                borderWidth:1, 
                                borderColor:"#636365"
                                }}
                            ></View>
                            <Icon name="notifications" size={28} color="#c8c8c8" />
                        </View>
                        <Text style={{color:"#c8c8c8", fontSize:13}}>NOTIFY</Text>
                    </View>
                    <View style={styles.tab}>
                        <Icon name="message" size={28} color="#c8c8c8" />
                        <Text style={{color:"#c8c8c8", fontSize:13}}>MESSAGE</Text>
                    </View>
                </View>
            </View>
        )
    }
}