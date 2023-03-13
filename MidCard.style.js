import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1
    },
    imageBody:{
        marginHorizontal:10,
        backgroundColor:'red',
        borderRadius:25,
        width:250,
        height:400,
    },
    image:{
        flex:1,
        borderRadius:25,
        width:250,
        height:400,
    },
    title:{
        position:'absolute',
        top:300,
        left:20,
        color:'#e0e0e0',
        fontSize:23,
        fontWeight:'bold',
    },location:{
        position:'absolute',
        top:360,
        left:20,
        color:'#708090',
        fontSize:18,
    }
})