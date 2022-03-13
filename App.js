import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import RestaurantScreen from "./screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusbar style="auto" />
    </>
  );
}
