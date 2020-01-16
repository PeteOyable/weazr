import React from 'react';
import { StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import Background from './Background';
import Informations from './Informations';

const Weazr = () => {
  const {
    gestureHandler,
    constrainedY,
    gradientHeight,
    gradientY,
    panPath,
    iconOpacity,
    iconScale,
    paddingForecast,
    temperatureOpacity,
    temperatureY,
    weatherY,
    summaryOpacity,
    summaryY,
    summary2Opacity,
    summary2Y,
    forecastOpacity,
    forecastY
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Background
        gradientHeight={gradientHeight}
        gradientY={gradientY}
        iconOpacity={iconOpacity}
        iconScale={iconScale}
        temperatureOpacity={temperatureOpacity}
        temperatureY={temperatureY}
        weatherY={weatherY}
        summaryOpacity={summaryOpacity}
        summaryY={summaryY}
        
      />
      
      <Informations
        constrainedY={constrainedY}
        gestureHandler={gestureHandler}
        paddingForecast={paddingForecast}
        summaryOpacity={summary2Opacity}
        summaryY={summary2Y}
        forecastOpacity={forecastOpacity}
        forecastY={forecastY}
        panPath={panPath}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default React.memo(Weazr);