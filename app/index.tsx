import { fetchCharacters } from "@/services/list";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native-reanimated/lib/typescript/Animated";

interface Personagem {
    id: number;
    name: String;
}

export default function Home() {
    const [personagens, setPersonagens] = useState<Personagem[]>([]);

    useEffect(() => {
        async function carregarPersonagens() {
            const dados = await fetchCharacters();
            setPersonagens(dados.characters);
        }

        carregarPersonagens();
    }, []);
    
    return (
        <View>
            <Text> Lista de Personagens</Text>
            <FlatList
                data={personagens}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}-{item.name}</Text>

                    </View>
                )}
            />
        </View>
    )

}