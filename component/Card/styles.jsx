import { StyleSheet } from "react-native";

export const estile = StyleSheet.create({
    container:{
        marginTop: 30,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#808982',
        borderRadius:10,
    },
    texto:{
        flex: 1,
        padding: 12,
        fontSize: 20,
        color: '#fff',
    },
    botao:{
        height: 50,
        width: 80,
        backgroundColor: '#D5B2AD',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    texto_botao:{
        fontSize: 30,
        color:'#fff',
    }
})
