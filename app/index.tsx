import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
// import { StatusBar } from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: 'GK Quiz !!' });
  }, [navigation]);

  return (    
// {/* <StatusBar barStyle="dark-content" backgroundColor='#F2F2F2'/> */}
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the General Knowledge Quiz! 📚✨</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/quiz')}>
        <Text style={styles.buttonText}>Start Quiz 🚀</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5ebe0', // Light pastel theme
    padding: 20,
  },
  title: {
    fontSize: 24,
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
    shadowColor: '#B8B8B8',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#4a4e69',
    fontWeight: 'bold',
  },
});










