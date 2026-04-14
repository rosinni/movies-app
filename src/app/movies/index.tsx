import React from "react";
import {Text,View} from "react-native"
import CardMovie from "@/components/ui/CardMovie";


function MoviesScreen() {
    return(
        <View>
            <CardMovie/>
            <CardMovie/>
        </View>
    )
}

export default MoviesScreen;