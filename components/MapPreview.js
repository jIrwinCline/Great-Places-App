import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MapPreview = (props) => {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${},${}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyAjDyGJ3z5mm9onrcPeVJszeB7TiG6tHuM`;
  return (
    <View>
      <Text></Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default MapPreview;
