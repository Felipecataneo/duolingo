import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    optionContainer:{
      borderWidth:2,
      borderBottomWidth:4,
      borderColor:"lightgrey",
      borderRadius:10,
      width:"48%",
      height:"48%",
      alignItems:'center',
      padding:10,
    },
    optionImage:{
      width: '100%',
      flex:1,
    },
    selectedContainer:{
      backgroundColor: '#DDF4FE',
      borderColor:'#81D5FE',
    },
    selectedText:{
      color:'#40BEF7',
      fontWeight: 'bold',
    },
    optionText:{
      fontWeight: 'bold',
      color:'black'
    },


});

export default styles;