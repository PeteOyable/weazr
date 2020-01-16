import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Svg, { ClipPath, Circle, Rect, LinearGradient, Defs, Stop } from 'react-native-svg';
import Animated from 'react-native-reanimated'
import Summary from './Summary';
import { SafeAreaView } from 'react-native-safe-area-context';
import useWeather from '../hooks/useWeather';
import useGradient from '../hooks/useGradient';
import useWeatherImage from '../hooks/useWeatherIcon';

const { height, width } = Dimensions.get('window');

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Background = ({ gradientHeight, gradientY, weatherY, temperatureOpacity, temperatureY, iconOpacity, iconScale, summaryOpacity, summaryY }) => {
  const { currentConditions } = useWeather();
  const { gradient } = useGradient();
  const { getWeatherImage } = useWeatherImage();
  return (
    <Animated.View style={{...styles.gradientContainer, height : gradientHeight}}>
      <AnimatedSvg height={gradientHeight} width={width}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={gradient[0]} stopOpacity="1" />
            <Stop offset="100%" stopColor={gradient[1]} stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <ClipPath id="clipPath">
          <AnimatedCircle r={height * 0.60} cx={width / 2} cy={gradientY} />
        </ClipPath>
        <AnimatedRect
          fill="url(#gradient)"
          clipPath="url(#clipPath)"
          width={width}
          height={gradientHeight}
        />
        {currentConditions && (
          <SafeAreaView>
            <View style={styles.informations}>
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
            </View>
            <Summary
              summaryOpacity={summaryOpacity}
              summaryY={summaryY}
            />
        </SafeAreaView>
        )}
      </AnimatedSvg>
    </Animated.View>
  ) 
}
    
const styles = StyleSheet.create({
  gradientContainer: {
    ...StyleSheet.absoluteFill,
  },

  informations: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },

  weather: {
    fontSize: 16,
    marginBottom: 10
  },

  temperature: {
    fontSize: 60,
    marginBottom: 30
  },
})



export default Background;