import "./App.css";
import Page from "./Page";

import { FavouriteProvider, WeatherProvider } from "./Provider";
import LocationProvider from "./Provider/LocationProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page/>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
