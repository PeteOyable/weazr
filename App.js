import React from 'react';
import { StyleSheet, View } from 'react-native';
import constants from './constants';
import Weazr from './components/Weazr';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Weazr />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLORS.SIMPLE.WHITE,
    flex: 1,
  },
});
