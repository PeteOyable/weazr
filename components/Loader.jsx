import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import constants from '../constants';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView autoPlay loop source={require('../assets/animations/lottie-loader.json')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: constants.COLORS.SIMPLE.WHITE,
    flex: 1,
    justifyContent: 'center'
  }
})

export default Loader;