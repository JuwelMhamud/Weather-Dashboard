import { FavouriteContext } from "../Context";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("Favourite", []);

  const addToFavourite = (latitude, longitude, location) => {
    const uniqueKey = `${latitude},${longitude}`;
    const exists = favourite.some((fav) => `${fav.latitude},${fav.longitude}` === uniqueKey);

    if (!exists) {
      setFavourite([
        ...favourite,
        { longitude, latitude, location },
      ]);
    }
  };

  const removeFromFavourite = (location) => {
    const restFavourite = favourite.filter((fav) => fav.location !== location);
    setFavourite(restFavourite);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourite, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
