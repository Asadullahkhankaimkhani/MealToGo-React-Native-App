import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import RestaurantScreen from "./screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
}
