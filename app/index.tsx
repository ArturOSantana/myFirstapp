import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home(){
 
    const [name, setName ] = useState('');
    const [idade, setIdade] = useState('');


    return(
        <View style ={styles.body}> 

        <Text style = {styles.title}> 
            Digite seu nome
        </Text>
        <TextInput 
            placeholder="Digite seu nome"
            onChangeText={setName}/> 
            
          
            <Text style = {styles.title}>
                Olá {name}, digite sua idade:
            </Text>
              <TextInput
                placeholder="Digite sua idade"
                onChangeText={setIdade}
            /> 

            <Text style = {styles.title}
            >
                Olá {name}, você tem {idade}
            </Text>


        </View>
    ); 
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: "blue",
        padding: "auto"
    }, 
    title: {
        fontSize: 34,
        fontFamily:"arial",
        color:"white"
    }
    

})