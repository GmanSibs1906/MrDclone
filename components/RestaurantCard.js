import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  img,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImageSrc = async () => {
      try {
        const imageUrl = await urlFor(img)?.url();
        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageSrc();
  }, [img]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imageSrc,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 shadow"
    >
      <Image source={{ uri: imageSrc }} className=" h-36 w-64 rounded-sm " />
      <View className=" px-3 pb-4 ">
        <Text className=" font-bold text-xl pt-2 ">{title}</Text>
        <View className=" flex-row items-center space-x-1 ">
          <StarIcon color="#04b2bc" opacity={0.5} size={22} />
          <Text className=" text-xs text-gray-500 ">
            <Text>{rating}</Text> ⚇ {genre}
          </Text>
        </View>
        {/* <View className=" flex-row space-x-1 items-center ">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className=" text-xs text-gray-500 max-w-[220px] ">Nearby ⚇ {address}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
