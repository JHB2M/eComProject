import React from "react";
import { View,Text ,Image} from "react-native";
import styles from "./MidCard.style";
function MidCard({imageUrl,title,isFavorite,location}){
    return(
        <View style ={styles.container}>
            <View style ={styles.imageBody}>
                <Image style ={styles.image} source ={{uri:imageUrl}}/>
                <Text style ={styles.title}>{title}</Text>
                <Text style ={styles.location}>{location}</Text>
            </View>
           
        </View>
    )
}
export default MidCard