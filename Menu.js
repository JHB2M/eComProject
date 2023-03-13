import React, { useState,useEffect } from "react";
import {View,Text,ImageBackground, TextInput,FlatList,} from 'react-native'

import  ImageBg from '../imagebackground/imagebg'
import styles from './Menu.style'
import Header from '../headerMenu/Header'
import avatarData from '../../avatardata.json'
import AvatarDataCard from "../avatarDataCard/AvatarDataCard";
import CardData from '../../cardata.json'
import MidCard from '../midCard/MidCard';
const image ={uri:"https://i.hizliresim.com/6ep42tk.png"}



function Menu(){
  const renderCategories =({item}) =><Text>{item.categories}</Text>
  const renderMidCard =({item} )=> <MidCard {...item}/>
  const renderAvatar = ({ item }) => <AvatarDataCard {...item} />;
    return(
        <View style ={styles.container}>
            <ImageBackground style ={styles.image} source={image} resizeMode ="cover">
            
            <Header> </Header>
            
            <View style ={styles.inputArea}>

            <TextInput style ={styles.input}placeholder="Search.."></TextInput>
            <Text style ={styles.Icon}>Icon</Text>
            </View>
            <FlatList
            data ={avatarData}
            renderItem ={renderAvatar}
            keyExtractor={item => item.id}
            numColumns={1}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            />
            <FlatList
            data ={CardData}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            numColumns={1}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            />
            <FlatList
            data ={CardData}
            renderItem={renderMidCard}
            keyExtractor={item => item.id}
            numColumns={1}
            horizontal={true}
            contentContainerStyle={{ paddingRight: 16, paddingLeft: 8 }}
            />
            


            </ImageBackground>
          
            
          
             
        </View>
    )
}

export default Menu