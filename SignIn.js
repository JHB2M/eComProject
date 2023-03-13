import React from "react";
import{View,Text,StyleSheet,TextInput,Button,ImageBackground, TouchableOpacity} from 'react-native'
import styles from './SignIn.style'

const image ={uri:"https://1.bp.blogspot.com/-XKjFEZ0cXR0/YTLOYRwuyvI/AAAAAAABUac/SCKhBxnZJDccevSmBENvaqb4Kkdk6KyiwCLcBGAsYHQ/s1920/Synthwave%2BNeon%2BLandscape%2BWallpaper-1080x1920.jpg"}



  
export default function SignIn(props){
    function navigateToMainScreen(){
        props.navigation.navigate('MainScreen'
           
        )
    }
    return(
        <View style ={styles.container}>
          
            <ImageBackground stlye ={styles.image} source={image} resizeMode="cover">
            <View style ={styles.header}>
            <Text style ={styles.title}>Get</Text>
            <Text style ={styles.title}>Started!</Text>
            </View>
            <View style ={styles.Body}>
                <View style = {styles.Inputs}><TextInput style ={styles.userInput} placeholder="Username">

                </TextInput>
                <TextInput style ={styles.passwordInput }placeholder="Password">

                </TextInput>
                </View>
                <Text style ={styles.forgotText}>
                    Forgot Password ?
                </Text>
                <TouchableOpacity style ={styles.buttonfacebook} onPress ={navigateToMainScreen}>
                <Text style = {styles.dummyText} >Sign In</Text>
               </TouchableOpacity>
                <Text style ={styles.description} > Don't have account? Sign up</Text>
            </View>
            <View style ={styles.bottomArea}>
               <TouchableOpacity style ={styles.buttongoogle}>
                <Text style ={styles.dummyText}>Connect With Google</Text>
                    </TouchableOpacity>
                <TouchableOpacity style ={styles.buttonfacebook}>
                <Text style = {styles.dummyText}>Connect With Google</Text>
               </TouchableOpacity>
               
               <View style ={styles.emptyDiv}></View>
            </View>
            
          
            
            
            </ImageBackground>
        </View>

    )
}

/*  <View style ={styles.header}>
            <Text style ={styles.title}>Get</Text>
            <Text style ={styles.title}>Started!</Text>
            </View>
            <View style ={styles.Body}>
                <TextInput style ={styles.userInput} placeholder="Username">

                </TextInput>
                <TextInput style ={styles.passwordInput }placeholder="Password">

                </TextInput>
                <Text style ={styles.forgotText}></Text>
                <Button style ={styles.signButton} title ="Sign In"></Button>

            </View>
            <View style ={styles.bottomArea}>
                <Button stlye ={styles.connectGoogle} title ="Connect With Google"></Button>
                <Button stlye ={styles.connectFacebook} title ="Connenct With Facebook"></Button>
            </View>*/ 