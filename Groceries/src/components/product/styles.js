import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    imageHeader: {
        position:"relative",
        left:0,
        right:0,
        top:0,
        height:height*0.5
    },
    aboutSection:{
        flex:1,
        
    }
})