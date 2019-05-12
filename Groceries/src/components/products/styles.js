import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10
    },
    headerContainer: {
        flexDirection:"row",
        height:height*0.1,
        alignItems:"center",
        paddingHorizontal:15,
        marginTop:10
    },
    headerLeftContainer: {
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    headerRightContainer: {
        flex:0.2,
        alignItems:"flex-end",
        position:"relative"
    },
    image: {
        width:36,
        height:36,
        borderRadius:50
    },
    tabsContainer: {
        flexDirection:"row",
        height:height*0.1,
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderColor:"#f0f0f0"
    },
    tab:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    tabText:{
        fontSize:18,
    },
    activeTab:{
        borderBottomColor:"#ec7b09",
        borderBottomWidth:2
    },
    activeText:{
        fontWeight:"bold",
        color:"#2d2e49"
    },
    groceriesContainer:{
        flexDirection:"row",
        marginTop:20
    },
    item: {
        flex:1,
        height:120,
        width:120,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f8f8f8",
        borderRadius:10,
        margin:10
    },
    searchContainer: {
        borderWidth:1,
        borderRadius:50,
        borderColor:"#ebebeb",
        paddingHorizontal:10,
        margin:10
    },
    textInput: {
        width:"80%",
        fontSize:20
    },
    subHeaderContainer: {
        flexDirection:"row",
        marginVertical:10,
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#f0f0f0",
        paddingHorizontal:10,
        paddingVertical:20,
        position:"relative"
    },
    foodListContainer: {
        marginTop:10
    },
    foodItemContainer:{
        flex:1,
        flexDirection:"row",
        paddingHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
    }
})

