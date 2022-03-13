import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeAreaView, View, StatusBar } from "react-native";
import RestaurantInfoCard from "../features/restaurant/components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchSection = styled(View)`
  padding: 16px;
`;

const List = styled(View)`
  flex: 1;
  padding: 16px;
`;

const RestaurantScreen = () => {
  return (
    <Container>
      <SearchSection>
        <Searchbar placeholder="Search..." />
      </SearchSection>
      <List>
        <RestaurantInfoCard />
      </List>
    </Container>
  );
};

export default RestaurantScreen;
