import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import Card from "../../component/Card"
import { estilos } from "./styles"

export default function Home(){

    const lista = ['teste', 'luany', 'bruno', 'chico', 'yasmmin', 'ket', 'lulis']

    return(
        <View style = {estilos.container}>
            <Text style= {estilos.titulo}>Lista de presença</Text>
            <Text style = {estilos.sub_titulo}>12, de março de 2024</Text>
            <View style = {estilos.form}>
                <TextInput 
                style = {estilos.input_text}
                />
               <TouchableOpacity style = {estilos.botao}>
                <Text style = {estilos.texto_botao}>
                    +
                </Text>
               </TouchableOpacity>
            </View>
            <FlatList 
                data={lista}
                keyExtractor={item => item}
                renderItem={({item})=>(
                    <Card key={item} name={item} />
                )}
                showsVerticalScrollIndicador={false}
            />
        </View>
        )
    }