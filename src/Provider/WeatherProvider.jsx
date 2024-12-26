import { WeatherContext } from "../Context/index.js";
import useWeather from "./../Hooks/useWeather";
const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useWeather();

  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
