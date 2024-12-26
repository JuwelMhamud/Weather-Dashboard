import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/WeatherBoard/WeatherBoard";
import { WeatherContext } from "./Context";

import clearSkyImg from "./assets/backgrounds/clear-sky.jpg";
import mistImg from "./assets/backgrounds/mist.jpeg";
import rainImg from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImg from "./assets/backgrounds/scattered-clouds.jpg";
import showerRainImg from "./assets/backgrounds/shower-rain.jpg";
import winterImg from "./assets/backgrounds/snow.jpg";
import thunderstormImg from "./assets/backgrounds/thunderstorm.jpg";
import LotCloud from "./assets/backgrounds/scattered-clouds.jpg"
const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImg, setClimateImg] = useState("");

  const getBackgroundImage = (climate) => {
    switch (climate?.toLowerCase()) {
      case "rain":
        return rainImg;
      case "clouds":
        return LotCloud;
      case "clear":
        return clearSkyImg;
      case "thunderstorm":
        return thunderstormImg;
      case "drizzle":
        return showerRainImg;
      case "snow":
        return winterImg;
      case "mist":
        return mistImg;
      case "haze":
        return scatteredCloudsImg;
    }
  };
  useEffect(() => {
    const bgImg = getBackgroundImage(weatherData.climate);
    setClimateImg(bgImg);
  }, [weatherData.climate]);
  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md p-8 w-96 mt-14 mx-auto">
            <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${climateImg})` }}
          className="grid place-items-center h-screen bg-cover bg-no-repeat"
        >
          <Header />
          <main className=" mt-20">
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
