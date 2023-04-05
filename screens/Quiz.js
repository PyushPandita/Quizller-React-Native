import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ButtomButton from '../components/ButtomButton';
// import { goToHome } from './Result'

const Quiz = ({navigation}) => {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  const getQuestion =  () => {
    setIsLoading(true);
    fetch ("https://opentdb.com/api.php?amount=15&type=multiple&encode=url3986").then(res => res.json()).then(result => {
      // console.log(result.results.question);
    setQuestions(result.results);
    setOptions(generateOptionsAndShuffle(result.results[0]));
    setIsLoading(false);
    })
};

  useEffect(() => {
    getQuestion();
  },[]);

  const getSkipQuestionNumber = () => {
    setQuestionNumber( questionNumber + 1)
    setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
  }

  const generateOptionsAndShuffle = (_question) => {
    const option = [..._question.incorrect_answers];
    option.push(_question.correct_answer);
    shuffleArray(option);
    return option;
  }

  const selectedOption = (_option) => {
    if (_option === questions[questionNumber].correct_answer){
      setScore (score + 20);
    }
    if (questionNumber !== 14) {
      setQuestionNumber( questionNumber + 1)
    setOptions(generateOptionsAndShuffle(questions[questionNumber + 1]))
  }
  if (questionNumber ===14) {
    goToResult();
  }
}

  const goToResult = () => {
    return (navigation.navigate('Result' , {
      Score: score
    }))
  }

  return (
    <View style={styles.container}>
      {isloading ?<View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}><Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 3, color: '#F2AA4CFF'}}>LOADING...</Text></View> : questions && (<View style={styles.parent}>
        <View style={styles.top}>
          <Text style={styles.question}>Q: {decodeURIComponent(questions[questionNumber].question)} </Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity style={[styles.optionButton]} onPress= {() => {selectedOption(options[0])}}>
            <Text style={styles.optionText}>{decodeURIComponent(options[0])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionButton]} onPress= {() => {selectedOption(options[1])}}>
            <Text style={styles.optionText}>{decodeURIComponent(options[1])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionButton]} onPress= {() => {selectedOption(options[2])}}>
            <Text style={styles.optionText}>{decodeURIComponent(options[2])}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.optionButton]} onPress= {() => {selectedOption(options[3])}}>
            <Text style={styles.optionText}>{decodeURIComponent(options[3])}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
         { questionNumber !==14 && (<ButtomButton name= 'SKIP QUESTION' onPress= {getSkipQuestionNumber} />)}
          {/* <ButtomButton name= 'SHOW RESULTS' onPress= {goToResult} /> */}
        </View>

      </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  parent: {
    paddingTop: 40,
    paddingHorizontal: 16,
    height: '100%',
  },

  top: {
    marginVertical: 16,
  },

  question: {
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: 0.8 ,
    color: '#F2AA4CFF'
  },

  options: {
    flex: 1,
    marginVertical: 16,
  },

  optionButton: {
    justifyContent: 'center',
    backgroundColor: '#F2AA4CFF',
    margin: 10,
    padding: 12,
    borderRadius: 10,
    elevation: 1,
  },

  optionText: {
    fontSize: 18,
    color: '#000',
    letterSpacing: 0.6,
    color: '#000'
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16, 
  },
});

export default Quiz;