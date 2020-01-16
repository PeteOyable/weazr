export const getCurrentConditions = () => {
  return {
    "LocalObservationDateTime": "2020-01-16T16:07:00-05:00",
    "EpochTime": 1579208820,
    "WeatherText": "Light snow",
    "WeatherIcon": 19,
    "HasPrecipitation": true,
    "PrecipitationType": "Snow",
    "IsDayTime": true,
    "Temperature": {
        "Metric": {
            "Value": -0.5,
            "Unit": "C",
            "UnitType": 17
        },
        "Imperial": {
            "Value": 31.0,
            "Unit": "F",
            "UnitType": 18
        }
    },
    "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us",
    "Link": "http://www.accuweather.com/en/ca/montreal/h3a/current-weather/56186?lang=en-us"
  }
}

export const getForecastByHour = () => {
  return [
    {
        "DateTime": "2020-01-16T17:00:00-05:00",
        "EpochDateTime": 1579212000,
        "WeatherIcon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": -3.3,
            "Unit": "C",
            "UnitType": 17
        },
        "PrecipitationProbability": 49,
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=17&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=17&unit=c&lang=en-us"
    },
    {
        "DateTime": "2020-01-16T18:00:00-05:00",
        "EpochDateTime": 1579215600,
        "WeatherIcon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": -4.4,
            "Unit": "C",
            "UnitType": 17
        },
        "PrecipitationProbability": 34,
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=18&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=18&unit=c&lang=en-us"
    },
    {
        "DateTime": "2020-01-16T19:00:00-05:00",
        "EpochDateTime": 1579219200,
        "WeatherIcon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": -5.0,
            "Unit": "C",
            "UnitType": 17
        },
        "PrecipitationProbability": 20,
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=19&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=19&unit=c&lang=en-us"
    },
    {
        "DateTime": "2020-01-16T20:00:00-05:00",
        "EpochDateTime": 1579222800,
        "WeatherIcon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": -6.7,
            "Unit": "C",
            "UnitType": 17
        },
        "PrecipitationProbability": 20,
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=20&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=20&unit=c&lang=en-us"
    },
    {
        "DateTime": "2020-01-16T21:00:00-05:00",
        "EpochDateTime": 1579226400,
        "WeatherIcon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false,
        "IsDaylight": false,
        "Temperature": {
            "Value": -8.3,
            "Unit": "C",
            "UnitType": 17
        },
        "PrecipitationProbability": 20,
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=21&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/hourly-weather-forecast/56186?day=1&hbhhour=21&unit=c&lang=en-us"
    },
  ]
}

export const getForecastForWeek = () => {
  return [
    {
        "Date": "2020-01-16T07:00:00-05:00",
        "EpochDate": 1579176000,
        "Temperature": {
            "Minimum": {
                "Value": -17.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": -2.2,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 22,
            "IconPhrase": "Snow",
            "HasPrecipitation": true,
            "PrecipitationType": "Snow",
            "PrecipitationIntensity": "Moderate"
        },
        "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=1&unit=c&lang=en-us"
    },
    {
        "Date": "2020-01-17T07:00:00-05:00",
        "EpochDate": 1579262400,
        "Temperature": {
            "Minimum": {
                "Value": -19.4,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": -13.3,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 31,
            "IconPhrase": "Cold",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=2&unit=c&lang=en-us"
    },
    {
        "Date": "2020-01-18T07:00:00-05:00",
        "EpochDate": 1579348800,
        "Temperature": {
            "Minimum": {
                "Value": -12.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": -11.7,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 22,
            "IconPhrase": "Snow",
            "HasPrecipitation": true,
            "PrecipitationType": "Snow",
            "PrecipitationIntensity": "Light"
        },
        "Night": {
            "Icon": 22,
            "IconPhrase": "Snow",
            "HasPrecipitation": true,
            "PrecipitationType": "Snow",
            "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=3&unit=c&lang=en-us"
    },
    {
        "Date": "2020-01-19T07:00:00-05:00",
        "EpochDate": 1579435200,
        "Temperature": {
            "Minimum": {
                "Value": -14.0,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": -4.2,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 22,
            "IconPhrase": "Snow",
            "HasPrecipitation": true,
            "PrecipitationType": "Snow",
            "PrecipitationIntensity": "Moderate"
        },
        "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=4&unit=c&lang=en-us"
    },
    {
        "Date": "2020-01-20T07:00:00-05:00",
        "EpochDate": 1579521600,
        "Temperature": {
            "Minimum": {
                "Value": -21.2,
                "Unit": "C",
                "UnitType": 17
            },
            "Maximum": {
                "Value": -11.9,
                "Unit": "C",
                "UnitType": 17
            }
        },
        "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
        },
        "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
        },
        "Sources": [
            "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ca/montreal/h3a/daily-weather-forecast/56186?day=5&unit=c&lang=en-us"
    }
]
}