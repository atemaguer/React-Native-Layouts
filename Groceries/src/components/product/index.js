import React, { Component } from 'react'
import { 
    View, 
    Text, 
    StatusBar,
    ImageBackground,
    ScrollView,
    TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

export default class ProductDetail extends Component {
    render(){
        return (
            <ScrollView
                scrollEnabled
            >   
                <View style={styles.container}>
                    <StatusBar hidden />
                        <ImageBackground
                            source={require("../../assets/strawberries2.jpeg")} 
                            style={styles.imageHeader}
                        >
                            <View style={{flex:1, flexDirection:"row", justifyContent:"space-between", paddingHorizontal:20, marginTop:20}}>
                                <Icon name="ios-close" size={48} color="black" onPress={()=>this.props.navigation.goBack()} />
                                <Icon name="ios-more" size={48} color="black" />   
                            </View>                     
                        </ImageBackground>
                    <View style={styles.aboutSection}>
                        <View style={{marginTop:20, paddingHorizontal:15, borderBottomWidth:1, borderBottomColor:"#e0e0e0", paddingBottom:20}}>
                            <Text style={{fontSize:28, color:"#30314c", fontWeight:"600"}}>Strawberries</Text>
                            <Text style={{fontSize:18, color:"#c3c3ca", fontWeight:"400", marginTop:10}}>
                                lorem ipsum dor let me is te le pi come through phi net lo dir de.
                                lorem ipsum dor let me is te le pi come through phi net lo dir de.
                                lorem ipsum dor let me is te le pi come through phi net lo dir de.
                            </Text>
                        </View>
                        <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:15, borderBottomWidth:1, borderBottomColor:"#e0e0e0", paddingBottom:20}}>
                            <View>
                                <Text style={{fontSize:20, color:"#393b53", fontWeight:"600"}}>Strawberries - 10x1</Text>
                                <Text style={{color:"#a4a4b0"}}>10 precut pieces. Organic</Text>
                            </View>
                            <View>
                                <View style={{backgroundColor:"#ed7f0f", borderRadius:50, height:40, width:40, justifyContent:"center", alignItems:"center"}}>
                                    <Icon name="ios-remove"  size={32} color="white" />
                                </View>
                            </View>
                            
                        </View>
                        <View style={{marginTop:20, flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:15, borderBottomWidth:1, borderBottomColor:"#e0e0e0", paddingBottom:20}}>
                            <View>
                                <Text style={{fontSize:20, color:"#393b53", fontWeight:"600"}}>Strawberries - 20x1</Text>
                                <Text style={{color:"#a4a4b0"}}>20 precut pieces. Organic</Text>
                            </View>
                            <View>
                                <View style={{borderRadius:50, borderWidth:1, borderColor:"#dedee2", height:40, width:40, justifyContent:"center", alignItems:"center"}}>
                                    <Icon name="ios-add"  size={32} color="black" />
                                </View>
                            </View>
                            
                        </View>
                    </View>
                    <TouchableHighlight
                        
                    >
                        <View style={{backgroundColor:"#ed7f0f", alignItems:"center", flexDirection:"row", justifyContent:"space-between", padding:20, marginHorizontal:10, marginVertical:20, borderRadius:50}}>
                            <Text style={{color:"white", fontSize:20, fontWeight:"700"}}>PROCEED TO CART</Text>
                            <Text style={{color:"white", fontSize:20, fontWeight:"700"}}>$29</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}