import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default function Home(){
 
    const [name, setName ] = useState('');
    const [idade, setIdade] = useState('');

    let [p,setP] = useState<number>(0);
    let [a,setA] = useState<number>(0);

   

    function calcularImc(p:Double, a:Double){
      
      p / (a*a);


        return p / (a*a);
    }

    let imc:Double = calcularImc(p,a);

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

            <Text style = {styles.title}>
                Digite seu Peso: 
            </Text>
            <TextInput 
          placeholder="PESO"></TextInput>
          

             <Text style = {styles.title}>
                Digite sua Altura: 
            </Text>
            <TextInput 
            placeholder="1.70"/>

            <Text>
                O seu IMC é {imc}

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