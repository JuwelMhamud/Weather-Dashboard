import { useContext, useEffect, useState } from "react";
import Redheart from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../Context";

const AddToFavourite = () => {
  const { favourite, addToFavourite, removeFromFavourite } =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;


  useEffect(() => {
    const found = favourite.find((item) => item.location === location);
    setIsFavourite(found);
  }, []);

  const handleFavourite = () => {
    const found = favourite.find((item) => item.location === location);

    if (!found) {
      addToFavourite(latitude, longitude, location);
    } else {
      removeFromFavourite(location);
    }
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? Redheart : heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavourite;
