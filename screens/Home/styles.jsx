import { StyleSheet } from "react-native"

export const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F7EDE2',
        padding:22,
    },
    titulo:{
     marginTop:40,
     fontSize:36,
     fontWeight: 'bold'   
    },
    sub_titulo:{
        fontSize:22,
        color: '#84A59D'
    },
    form: {
        flexDirection: 'row',
        width:'100%',
        marginTop:56,
    },
    input_text:{
        flex: 1,
        height:80,
        color:'#F6BD60',
        fontSize: 26,
        padding:17,
        borderRadius:10,
        backgroundColor: '#A0736F',
    },
    botao:{
        justifyContent:'center',
        alignItems: 'center',     
        width:60,
        borderRadius:10,
        fontSize:50,
        backgroundColor: '#E6C4A7',
        marginLeft:16,
  },
  texto_botao:{
    fontSize:30,
  },
})