import { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import pinImg from "../../assets/pin.svg";
import rainyIcon from "../../assets/rainy.svg";
import sunIcon from "../../assets/sun.svg";
import thunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../Context";
import { getFormattedDate } from "../../utils/date-utils";
const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  

  const { location, climate, temperature, time } = weatherData;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyIcon;
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return sunIcon;

      case "Thunder":
        return thunderIcon;
      case "Haze":
        return hazeIcon;
      default:
        return sunIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinImg} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
