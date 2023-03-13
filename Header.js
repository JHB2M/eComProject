import React from "react";
import { View,Text ,TouchableOpacity} from "react-native";
import styles from './Header.style'
function Header(){
    return(
        <View style ={styles.container}>
            <View style ={styles.topArea}>
            <TouchableOpacity><Text style ={styles.x}>X</Text></TouchableOpacity>
            <Text  style ={styles.title}>Slice</Text>
            <TouchableOpacity><Text style ={styles.x}>X</Text></TouchableOpacity>
            
            
            </View>
            <Text style ={styles.header}>Discover</Text>

        </View>
    )
}

export default Header