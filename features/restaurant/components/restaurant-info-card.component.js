import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import { Spacer } from "../../../component/spacer/spacer";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;

const Address = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Info = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantCard = styled(Card)`
  color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.bg.primary};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

const RestaurantStatus = styled(View)`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

const MiniContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <MiniContainer>
          <Rating>
            {ratingArray.map((ele, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <RestaurantStatus>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </RestaurantStatus>
        </MiniContainer>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
