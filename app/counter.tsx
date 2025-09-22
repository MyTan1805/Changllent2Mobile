import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleReset = () => setCount(0);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.switchWrapper}>
        <Switch
          trackColor={{ false: '#b0b0b0', true: 'red' }}
          thumbColor={isEnabled ? 'blue' : '#f4f3f4'}
          ios_backgroundColor="#b0b0b0"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switchStyle}
        />
      </View>

      <View 
        style={[
          styles.counterContainer, 
          isEnabled && styles.counterContainerEnabled
        ]}
      >
        <Text style={styles.counterText}>Count: {count}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrement}
        onLongPress={handleReset}
        activeOpacity={0.6}
      >
        {/* --- THAY ĐỔI Ở ĐÂY: Dùng Text lồng nhau để tạo style khác nhau --- */}
        <Text style={styles.buttonText}>
          <Text style={styles.largeButtonText}>Click to increment.</Text>
          {'\n'} {/* Ký tự xuống dòng */}
          Long press to reset.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  
  switchWrapper: {
    alignSelf: 'center', 
    marginBottom: 40,
  },
  
  switchStyle: {
    transform: [{ scale: 1.5 }],
  },
  
  counterContainer: {
    borderWidth: 2,
    borderColor: '#000000',
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
  },
  counterContainerEnabled: {
    backgroundColor: '#ff9e20ff',
  },
  
  counterText: {
    fontSize: 32,
    color: '#000',
  },
  button: {
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    // --- THAY ĐỔI Ở ĐÂY: Căn khối văn bản sang bên trái của nút ---
    alignItems: 'flex-start',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    // --- THAY ĐỔI Ở ĐÂY: Căn các dòng chữ sang bên trái ---
    textAlign: 'left',
  },
  // --- STYLE MỚI: Chỉ để làm cho dòng đầu tiên to hơn ---
  largeButtonText: {
    fontSize: 20, // Kích thước chữ lớn hơn
  }
});