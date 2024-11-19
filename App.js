import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, Alert, ScrollView, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';

import ServalImage from './img/Serval Cat.jpg';
import StarlingImage from './img/Starling.jpg';
import FennecFoxImage from './img/Fennec Fox.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FA8072',
    margin: 8,
    marginTop: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
  icon: {
    marginRight: 8,
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 40,
    alignSelf: 'center',
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};


const InputBox = ({label,onChangeText}) => {
  return (
      <View>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
      </View>
  );
};

const QuizApp = () => {
  const [username,setUsername] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const correctAnswers = ['Serval', 'Starling', 'Fennec Fox'];

  const handleAnswerChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) score++;
    }
    const message = score === 3 ? `Well done ${username}! All answers are correct!` : `You got ${score} out of 3 correct!`;
    Alert.alert("Quiz Result", message);
  };

  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.header}>
            <Icon name="paw" size={24} color="#ffffff" style={styles.icon} />
            <Text style={styles.headerText}>ANIMAL QUIZ</Text>
          </View>
          <InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>
          <Text></Text>
          {questions.map((question, index) => (
              <View key={index} style={styles.questionContainer}>
                <Image source={question.image} style={styles.image} />
                <Text style={styles.questionText}>{question.text}</Text>
                <RNPickerSelect
                    onValueChange={(value) => handleAnswerChange(value, index)}
                    items={question.options}
                    style={pickerSelectStyles}
                />
              </View>
          ))}
          <View style={styles.buttonContainer}>
            <Button title="Submit Answers" onPress={handleSubmit} color="#0066cc" />
          </View>
        </ScrollView>
      </View>
  );
};

const questions = [
  {
    text: "What animal is this?",
    image: ServalImage,
    options: [
      { label: 'Serval', value: 'Serval' },
      { label: 'Bob Cat', value: 'Bob Cat' },
      { label: 'Caracal', value: 'Caracal' },
    ]
  },
  {
    text: "What animal is this?",
    image: StarlingImage,
    options: [
      { label: 'Swift', value: 'Swift' },
      { label: 'Starling', value: 'Starling' },
      { label: 'Sparrow', value: 'Sparrow' },
    ]
  },
  {
    text: "What animal is this?",
    image: FennecFoxImage,
    options: [
      { label: 'Fennec Fox', value: 'Fennec Fox' },
      { label: 'Arctic Fox', value: 'Arctic Fox' },
      { label: 'Kit Fox', value: 'Kit Fox' },
    ]
  },
];

export default QuizApp;
