import React, {Component} from 'react';
import { 
  Text, 
  View, 
  Image,
  StatusBar, 
  TextInput,
  ScrollView,
  TouchableHighlight } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";
import { foodListItems } from "./foodList";

export default class Products extends Component{

  renderTabs = () =>{
    return(
      <View style={styles.tabsContainer}>
        <View style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeText]}>Produce</Text>
        </View>
        <View style={styles.tab}>
            <Text style={styles.tabText}>Meat</Text>
        </View>
        <View style={styles.tab}>
            <Text style={styles.tabText}>Seafood</Text>
        </View>
        <View style={styles.tab}>
            <Text style={styles.tabText}>Groceries</Text>
        </View>
      </View>
    )
  }

  renderHeader = () =>{
    return (
      <View style={styles.headerContainer}>
          <View style={styles.headerLeftContainer}>
              <Image source={require("../../assets/profile.jpeg")} style={styles.image}/>
              <Text style={{marginHorizontal:20, fontSize:25, fontWeight:"bold", color:"#30314c"}}>Browse</Text>
          </View>
          <View style={styles.headerRightContainer}>
              <View style={{backgroundColor:"#ed7f0f", justifyContent:"center", aligItems:"center", height:15, width:15, zIndex:4, borderRadius:50, position:"absolute", overflow:"visible", right:-5, top:-3}}>
                  <Text style={{color:"white", fontSize:10, alignSelf:"center", fontWeight:"600", margin:2}}>2</Text>
              </View>
              <Icon name="ios-cart" size={28} color="#2f304a" />
          </View>
      </View>
    )
  }

  renderGroceries = () =>{
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.groceriesContainer}>
          <View style={styles.item}>
            <Image source={require("../../assets/apple.jpeg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>FRESH FRUITS</Text>
          </View>
          <View style={styles.item}>
            <Image source={require("../../assets/spinach.jpg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>VEGGIES</Text>
          </View>
          <View  style={styles.item}>
          <Image source={require("../../assets/dryfruit.jpeg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>DRY FRUITS</Text>
          </View>
          <View style={styles.item}>
            <Image source={require("../../assets/apple.jpeg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>FRESH FRUITS</Text>
          </View>
          <View style={styles.item}>
            <Image source={require("../../assets/spinach.jpg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>VEGGIES</Text>
          </View>
          <View  style={styles.item}>
          <Image source={require("../../assets/dryfruit.jpeg")} style={{width:50, height:50}} />
            <Text style={{marginTop:5, color:"#2f314b", fontWeight:"500", fontSize:13}}>DRY FRUITS</Text>
          </View>
        </View>
      </ScrollView>
    )
  }

  renderSearchBar = () =>{
    return (
      <View style={styles.searchContainer}>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <TextInput 
                placeholder="Search"
                placeholderTextColor="#2d2e49"
                style={styles.textInput}

              />
              <Icon name="ios-search" size={28} color="#292a46" />
          </View>
      </View>
    )
  }

  renderSubHeader = () =>{
    return (
      <View style={styles.subHeaderContainer}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"#30314c"}}>Popular Nearby</Text>
          <View style={{position:"absolute", backgroundColor:"#363851", height:3, width:40, zIndex:4, bottom:-2, left:10}}>
          </View>
          <Text style={{fontSize:16, color:"#ec7b07", fontWeight:"500"}}>View All</Text>
      </View>
    )
  }

  renderFoodList = () =>{
    return (
      foodListItems.map((item, index)=>{
        return(
          <TouchableHighlight 
            onPress={()=>this.props.navigation.navigate("ProductDetail")}
          >
            <View style={styles.foodItemContainer} key={index}>
                <View style={{flex:0.4, marginRight:10}}>
                    <Image source={item.image} style={{borderRadius:10,width:100, height:100}}/>  
                </View>
                <View style={{flex:1, marginLeft:10}}>
                    <Text style={{fontSize:28, marginVertical:5, color:"#2e2f4a"}}>{item.name}</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:18, marginRight:10}}>{item.quantity}</Text>
                        <View style={{height:4,width:4, marginHorizontal:5, backgroundColor:"#9a9aa7", borderRadius:50}}></View>
                        <Text style={{marginLeft:10, fontSize:18, color:"#ed8010"}}>{item.time}</Text>
                    </View>
                </View>
            </View>
          </TouchableHighlight>
        )
      })
    )
  }
  render() {
    return (
      <ScrollView 
        scrollEnabled={true}  
        showsVerticalScrollIndicator={false}
      >
        <StatusBar 
          hidden
        />
        {this.renderHeader()}
        {this.renderTabs()}
        {this.renderGroceries()}
        {this.renderSearchBar()}
        {this.renderSubHeader()}
        <View style={styles.foodListContainer}>
            {this.renderFoodList()}
        </View>
      </ScrollView>
    );
  }
}