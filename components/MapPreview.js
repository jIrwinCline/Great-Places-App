import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ENV from "../env";

const MapPreview = (props) => {
  let imagePreviewUrl;

  if (props.location) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`;
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {pros.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.childeren
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});
export default MapPreview;
