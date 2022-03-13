import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, SafeAreaView, Text, View, StatusBar } from "react-native";
import RestaurantInfo from "../features/restaurant/components/restaurant-info.component";

const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <Searchbar placeholder="Search..." />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
});

export default RestaurantScreen;
