import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";

import * as placesActions from "../store/places-actions";
import { useDispatch } from "react-redux";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  const deletePlaceHandler = (idToDelete) => {
    dispatch(placesActions.deletePlace(idToDelete));
  };

  return (
    <View>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <PlaceItem
            image={itemData.item.imageUri}
            title={itemData.item.title}
            address={itemData.item.address}
            placeId={itemData.item.id}
            deletePlace={deletePlaceHandler}
            onSelect={() => {
              props.navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});
export default PlacesListScreen;
