import{StyleSheet} from 'react-native'

export default StyleSheet.create({
    title:{
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:60,
        color:'#FFFFFF'
    },
    container:{
        
    flex:1
    },
    header:{
        margin:10,
        marginTop:50,
        padding:10,
    },  
    image:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
       
    },
    Inputs:{
        margin:10,
    },
    
    userInput:{
        borderRadius:7,
        padding:15,
        marginHorizontal:10,
        backgroundColor:'white',
        margin:7,
    },
    passwordInput:{
        borderRadius:7,
        margin:7,
        padding:15,
        marginHorizontal:10,
        backgroundColor:'white',
    },
    forgotText:{
        marginHorizontal:15,
        fontSize:20,
        color:'#ffdead',
        margin:4,
    },
    buttonSign:{
        margin:5,
        marginHorizontal:20,
        padding:15,
        backgroundColor:'#00bfff'
    },
    signbuttonText:{
        color:'white',
        fontSize:20,
    },
    description:{
        fontSize:20,
        color:'#ffdead'
    },
    buttongoogle:{
        
        borderRadius:7,
        alignItems:'center',
        margin:10,
        marginHorizontal:20,
        padding:20,
        backgroundColor:'orange'
    },
    buttonfacebook:{
        borderRadius:7,
        alignItems:'center',
        margin:10,
        marginHorizontal:20,
        padding:20,
        backgroundColor:'#00bfff'
    },
    dummyText:{
        color:'white'
    },
    emptyDiv:{
        
        height:60,
    }
    
    
})