import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Result() {
  const router = useRouter();
  const { score, total } = useLocalSearchParams();

  const percentage = (Number(score) / Number(total)) * 100;

  let remark = '💡 Keep learning and improving!';
  if (percentage >= 80) {
    remark = '🏆 Amazing! You’re a GK Champion!!';
  } else if (percentage >= 50) {
    remark = '😊 Good job! Keep learning and improving!!';
  } else {
    remark = 'Don’t worry! Keep practicing and you’ll do better next time!!';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>✨Quiz Completed!✨</Text>
      <Text style={styles.scoreText}>Your Score: {score} / {total}</Text>
      <Text style={styles.remarkText}>{remark}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz')}>
        <Text style={styles.buttonText}>Retake Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5ebe0', // Soft pastel orange
    padding: 20,
  },
  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 24,
    color: '#9a8c98',
    textAlign: 'center',
    marginBottom: 10,
  },
  remarkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6d6875',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d5bdaf',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#22223b',
    fontWeight: 'bold',
  },
});







