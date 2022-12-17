import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#58CC02',
        height:50,
        marginVertical:10,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:5,
        borderBottomWidth:5,
        borderColor: "#57A600",
    },
    text:{
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        borderColor: "white",
        borderBottomWidth: 1.5,
    },
    disabledContainer: {
        backgroundColor: "lightgray",
        borderColor: "grey",
    }

})

export default styles;