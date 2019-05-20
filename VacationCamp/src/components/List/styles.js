import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f9f9f9"
    },
    header:{
        marginTop:50,
        marginHorizontal:20,
        paddingHorizontal:20,
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:8,
        paddingVertical:5,
        elevation:0.2
    },
    subHeader: {
        marginTop:15, 
        paddingHorizontal:20
    },
    subHeaderText: {
        textAlign:"left", 
        fontSize:30,
        fontWeight:"700", 
        color:"#4e4e4e"
    },
    filterContainer: {
        paddingHorizontal:20,
    },
    filter: {
        marginRight:10,
        backgroundColor:"white",
        borderRadius:50,
        height:height*0.05,
        justifyContent:"center",
        alignItems:"center",
        marginTop:15,
        elevation:0.5,
        marginBottom:20
    },
    activeFilter: {
        backgroundColor:"#ff7a8a"
    },
    activeText: {
        color:"white"
    },
    filterText: {
        fontSize:18,
        color:"#929292",
        paddingHorizontal:15
    },
    listContainer:{
        marginHorizontal:20,
        paddingBottom:100
    },
    cardContainer: {
        backgroundColor:"white",
        borderRadius:10,
        overflow:"hidden",
        marginBottom:15
    },
    cardContent: {
        padding:15
    },
    imageContainer: {
        height:height * 0.22,
        width:"100%", 
        paddingHorizontal:20,
        
    },
    addressContainer: {
        backgroundColor:"rgba(0,0,0,0.5)", 
        marginTop:10,
        borderRadius:50,
        height:height * 0.05,
        paddingHorizontal:10,
        alignItems:"center",
        marginBottom:20,
        alignSelf:"flex-start"
    },
    addressText: {
        color:"#fdfdfd",
        fontSize:15
    },
    priceText: {
        fontSize:25,
        color:"#494949",
        fontWeight:"700"
    },
    availability: {
        color:"#39bd1f"
    },
    iconContainer: {
        marginRight:10,
        justifyContent:"space-evenly"
    }
})

