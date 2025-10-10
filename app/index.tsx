import { fetchCharacters } from "@/services/list";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-reanimated/lib/typescript/Animated";

export default function Home(){
    const [personagens,setPersonagens] = useState([]);

    useEffect(() => {
        async function carregarPersonagens(){
            const dados = await fetchCharacters();
            setPersonagens(dados.characters);
        }
    },[]);
    return(
        <view>
            <text> Lista de Personagens</text>
            <FlatList
                data={personagens}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})} => (
                    <View>
                        <Image source={{uri:item[0]}}/>
                        

                    </View>
                )
            />
        </view>
    )
    
}