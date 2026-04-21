import React, {useEffect,useState} from "react";
import {Text,View, FlatList} from "react-native"
import CardMovie from "@/components/ui/CardMovie";
import { fetchResults } from "@/services/api.client.placeholder";



function MoviesScreen() {

    const [characters,setCharacters]= useState<{name: string; gender: string, id: number}[]>([])


    async function handleState() {
        let data = await fetchResults("character")
        if (!data.ok) {
            setCharacters(data);
        }
        console.log("error",data);
        
        
        
    }
   

    useEffect(()=>{
        //el codigo que queremos que se ejecute ni bien carga el componente
       handleState()
    },[])


    return(
        <View>
            <FlatList
            data={characters}
            renderItem={({item})=><CardMovie name={item.name} gender="test" id={item.id}/>}/>
        </View>
    )
}

export default MoviesScreen;