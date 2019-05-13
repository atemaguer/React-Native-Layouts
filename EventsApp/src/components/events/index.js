import React, {Component} from 'react';
import {
  Text, 
  View,
  Image, 
  StatusBar,
  ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

import { styles } from "./styles";
import BottomTabNavigator from "../bottomNavigator";
import { events } from "./eventsList";

export default class EventsList extends Component {
  renderHeader = () =>{
    return (
      <View style={styles.headerContainer}>
        <View style={{flex:1}}>
            <Text style={{fontSize:40, color:"#e1e1e2", fontWeight:"600"}}>Event</Text>
            <Text style={{color:"#595a5e", fontWeight:"600"}}>You have 7 schedules in August</Text>
        </View>
        <View style={{flex:0.4, alignItems:"flex-end"}}>
          <Image source={require("../../assets/profile.jpeg")} style={styles.image} />
        </View>
      </View>
    )
  }

  renderEventsList = () =>{
    return (
      <View style={styles.eventsListContainer}>
        {
          events.map((event, index)=>{
            return (
              <View style={styles.eventContainer} key={index}>
                <View style={{marginHorizontal:10}}>
                  <Image source={event.image} style={{width:70, height:70, borderRadius:10}}/>
                </View>
                <View style={{marginHorizontal:10}}>
                    <Text style={{color:"#4e5056", fontSize:15, fontWeight:"500"}}>{event.date}</Text>
                    <Text style={{color:"#d5d5d8", fontSize:20, fontWeight:"600", marginVertical:3}}>{event.name}</Text>
                    <View style={{flexDirection:"row",alignItems:"center", marginBottom:4}}>
                        <Icon name="room" size={15} color="#494b53" />
                        <Text style={{color:"#494b53", marginLeft:5}}>{event.location}</Text>
                    </View>
                    <View style={{
                      backgroundColor:"#1e1e24", 
                      borderRadius:50, 
                      paddingHorizontal:5,
                      paddingVertical:3, 
                      flexDirection:"row"}}>
                        <Image source={require("../../assets/profile.jpeg")} style={{width:30, height:30, borderRadius:50, marginRight:3}}/>                  
                        <Image source={require("../../assets/profile.jpeg")} style={{width:30, height:30, borderRadius:50, marginRight:3}}/>                  
                        <Image source={require("../../assets/profile.jpeg")} style={{width:30, height:30, borderRadius:50, marginRight:3}}/>                  
                        <View style={{justifyContent:"center", alignItems:"center", borderRadius:50, borderColor:"#24717b", borderWidth:2}}>
                            <Text style={{color:"#24717b", paddingHorizontal:10, fontSize:16, fontWeight:"500"}}>{event.numberGoing}+</Text>
                        </View>
                    </View>
                </View>
            </View>
            
            )
          })
        }
        
      </View>
    )
  }
  render() {
    return (
     
        <View style={styles.container}>
          <StatusBar hidden/>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            {this.renderHeader()}
            {this.renderEventsList()}
          </ScrollView>
          <BottomTabNavigator />
        </View>
      
      
    );
  }
}

