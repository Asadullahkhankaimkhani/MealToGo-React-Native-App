import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import RestaurantScreen from "./screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
