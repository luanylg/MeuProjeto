import { View, Text, TouchableOpacity } from "react-native";
import { estile } from "./styles";

export default function Card({ name }){
    return(
        <View style={estile.container}>
            <Text style={estile.texto}>
                {name}
                ...
            </Text>
            <TouchableOpacity style={estile.botao}>
                <Text style={estile.texto_botao}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}