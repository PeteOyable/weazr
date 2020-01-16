import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Svg, { Rect, LinearGradient, Defs, Stop } from 'react-native-svg';
import Animated from 'react-native-reanimated'
import Summary from './Summary';
import { SafeAreaView } from 'react-native-safe-area-context';
import useWeather from '../hooks/useWeather';
import useColors from '../hooks/useColors';
import useWeatherImage from '../hooks/useWeatherIcon';
import constants from '../constants';

const { height, width } = Dimensions.get('window');

const Background = ({ weatherY, temperatureOpacity, temperatureY, iconOpacity, iconScale, summaryOpacity, summaryY }) => {
  const { currentConditions } = useWeather();
  const { gradient } = useColors();
  const { getWeatherImage } = useWeatherImage();
  return (
    <View style={{...styles.gradientContainer}}>
      <Svg height={height * 0.66} width={width}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
            <Stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect
          fill="url(#gradient)"
          width={width}
          height={height * 0.66}
        />
        {currentConditions && (
          <SafeAreaView>
            <Animated.View style={styles.informations}>
              <Animated.Text style={{ ...styles.weather, transform: [{ translateY: weatherY }] }}>{currentConditions.WeatherText}</Animated.Text>
              <Animated.Text
                style={{
                  ...styles.temperature,
                  opacity: temperatureOpacity,
                  transform: [
                    { translateY: temperatureY }                      
                  ]
                }}>
                {Math.round(currentConditions.Temperature.Metric.Value)}°
              </Animated.Text>
              <Animated.Image
                source={getWeatherImage(currentConditions.WeatherIcon)}
                style={{
                  opacity: iconOpacity,
                  transform: [
                    { scale: iconScale}
                  ]
                }} /> 
            </Animated.View>
            <Summary
              summaryOpacity={summaryOpacity}
              summaryY={summaryY}
            />
        </SafeAreaView>
        )}
      </Svg>
    </View>
  ) 
}
    
const styles = StyleSheet.create({
  gradientContainer: {
    ...StyleSheet.absoluteFill,
    height : height * 0.66
  },

  informations: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  weather: {
    color: constants.COLORS.SIMPLE.WHITE,
    fontSize: 16,
    marginBottom: 10
  },

  temperature: {
    color: constants.COLORS.SIMPLE.WHITE,
    fontSize: 60,
    marginBottom: 30
  },
})



export default Background;