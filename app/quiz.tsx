import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const questions = [
  { question: '1. What is the capital of France?',
     options: ['Paris', 'London', 'Rome','Toronto'], 
    correctAnswer: 'Paris' },
  
    { question: '2. Which planet is known as the Red Planet?', 
    options: ['Venus','Mars', 'Jupiter', 'saturn'], 
    correctAnswer: 'Mars' },

  { question: '3. What is the smallest ocean in the world?', 
    options: ['Atlantic','Arctic', 'Indian','Pacific'],
     correctAnswer: 'Arctic' },

  {  question: '4. what is the capital of Japan?', 
     options: ['Ontorio','Paris', 'China','Tokyo'],
      correctAnswer: 'Tokyo' }, 

 {  question: '5. Who painted the Mona Lisa?', 
     options: ['Picasso','Van Gogh', 'Leonardo da Vinci','Michelangelo'],
      correctAnswer: 'Leonardo da Vinci' },  
      
 {  question: '6. Which element has the chemical symbo O?', 
     options: ['Ozone','Gold', 'Osmiunm','Oxygen'],
      correctAnswer: 'Oxygen' },

{  question: '7. What is the longest river in the world?', 
    options: ['Nile','Amazon', 'Ganga','Yangtze'],
      correctAnswer: 'Nile' },

{  question: '8. In which country did the olympic games originate?', 
    options: ['Italy','Greece', 'Egypt','India'],
     correctAnswer: 'Greece' }, 
     
{  question: '9. What is the largest mammal on Earth?', 
    options: ['Elephant','Whale', 'Giraffe','Hippo'],
    correctAnswer: 'Whale' },

{  question: '10. Which famous scientist developed the theory of relativity ?', 
    options: ['Isaac Newton','Nikola Tesla', 'ALbert Einstein','Galileo Galilei'],
     correctAnswer: 'ALbert Einstein' },   
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push(`/result?score=${score + 1}&total=${questions.length}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5ebe0', 
    padding: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6d6875',
    textAlign: 'center',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#d5bdaf', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#031926',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  optionText: {
    fontSize: 18,
    color: '#22223b',
    fontWeight: 'bold',
  },
});
