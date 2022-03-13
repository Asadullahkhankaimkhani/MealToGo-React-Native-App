import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled.Text`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;