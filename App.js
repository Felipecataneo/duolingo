import React, { useEffect, useState} from 'react';
import  { View,StyleSheet, Alert, ActivityIndicator} from 'react-native';
import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import questions from './assets/data/allQuestions';
import Header from './src/components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FillInTheBlank from './src/components/FillInTheBlank';


const App = () => {

 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] =useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5);
  const [hasloaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length){
      Alert.alert("Você venceu!");
      setCurrentQuestionIndex(0);
    } else{
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
    

  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  },[]);

  useEffect(()=>{
    if (hasloaded){
      saveData();
    }
    
  }, [lives,currentQuestionIndex, hasloaded])

  const onCorrect =() =>{
    setCurrentQuestionIndex (currentQuestionIndex +1);
  }

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () =>{
    
    if (lives <=1 ){
      Alert.alert("Jogo Acabou",'Tente outra vez',[
        {
          text: 'Tentar outra vez',
          onPress: restart,
        }
      ]);
    }else{
      Alert.alert("Está errado");
      setLives(lives-1);
      
    }
    
  }
  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());
  };
  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }
    setHasLoaded(true);
  }
  if(!hasloaded){
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1, 
    alignItems:'center',
    justifyContent:'center',
    padding: 10, 
    paddingTop:40
  },
 
 })

export default App;