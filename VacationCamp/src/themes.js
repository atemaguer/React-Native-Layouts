import { StyleSheet } from "react-native";

export default StyleSheet.create({
    flex: {
        flex:1
    },
    row: {
        flexDirection:"row"
    },
    column: {
        flexDirection:"column"
    },
    center:{
        justifyContent: "center",
        alignItems:"center"
    },
    left:{
        justifyContent:'center',
        alignItems:"flex-start"
    },
    right:{
        justifyContent:'center',
        alignItems:"flex-end"
    },
    seperate: {
        justifyContent:"space-between"
    },
    alignCenter: {
        alignItems:"center"
    }
}) 