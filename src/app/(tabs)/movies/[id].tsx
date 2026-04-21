import React, {use, useEffect, useState} from "react";
import {Text,View} from "react-native"
import { useLocalSearchParams } from "expo-router";

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;   
}


function MovieDetails() {

    const [character, setCharacter] = useState<Character | null>(null)

    const {id} = useLocalSearchParams()


    function getCharacter() {
        fetch(`https://rickandmortyapi.com/api/character/${id}`,{method:'GET'})
        .then((response)=>response.json())
        .then((data)=>setCharacter(data))
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        getCharacter()
    },[])

    return(
        <View>
            <Text>{character?.name}</Text>
            <Text>{character?.status}</Text>
        </View>
    )
}

export default MovieDetails;