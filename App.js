import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {UpdatesChecker} from "./src/expo-ota-update-checker";

export default function App() {
  return (
    <UpdatesChecker>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </UpdatesChecker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
