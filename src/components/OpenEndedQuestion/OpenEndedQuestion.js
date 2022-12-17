import React, { useState } from 'react';
import { View, Text, TextInput, Image, Pressable, Keyboard } from 'react-native';
import Button from '../Button/Button';
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';

const OpenEndedQuestion = ({question, onCorrect, onWrong }) => {
    const [input, setInput] = useState("")
    const onButtonPress = () => {
        if(question.answer.toLowerCase().trim()=== input.toLowerCase().trim()){
            onCorrect();
        }else {
            onWrong();
        }
        setInput('');
    };
    return (
        <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
            <Text style={styles.title}>Translate this setence</Text>
            <View style={styles.row}>
                <Image source={mascot} style={styles.mascot} resizeMode='contain' />
                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>
            <TextInput 
                value = {input}
                onChangeText = {setInput}
                placeholder='Type in english'
                style={styles.textInput}
                textAlignVertical='top'
                multiline
            />
            <Button text="Checar" onPress={onButtonPress} disabled={!input}/>
        </Pressable>
    ) ;

};

export default OpenEndedQuestion;