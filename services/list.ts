const API_HOST = "https://dattebayo-api.onrender.com";

export async function fetchCharacters() {
    try {
        const response = await fetch(`${API_HOST}/characters`);

        if(!response.ok){
            throw new Error(
                `Erro: ${response.status} - ${response.statusText}`
            )
        }
        return await response.json();
    } catch (error){
        console.error("Error ao Buscar Personagem", error);
        return[];

    }
}