import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import constants from './constants';
import Weazr from './components/Weazr';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppLoading } from 'expo';
import {Asset} from 'expo-asset'

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  const loadImagesAsync = async () => {
    const images = [
      require('./assets/icons/Clear_night.png'),
      require('./assets/icons/Cloud_Sun.png'),
      require('./assets/icons/Cloudy_night.png'),
      require('./assets/icons/Cloudy.png'),
      require('./assets/icons/Rain.png'),
      require('./assets/icons/Snow.png'),
      require('./assets/icons/Storm.png'),
      require('./assets/icons/Sunny.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.loadAsync(image);
    })

    return Promise.all(cacheImages);
  };

  return (
    isAppReady ? (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Weazr />
        </View>
      </SafeAreaProvider>
    ) :
      <AppLoading
        startAsync={loadImagesAsync}
        onFinish={setAppReady(true)}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLORS.SIMPLE.WHITE,
    flex: 1,
  },
});
