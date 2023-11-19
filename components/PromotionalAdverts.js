import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import React from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const PromotionalAdverts = ({ id, imgUrl, title, description, heading }) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow w-[350px] h-[180px] p-[15px] rounded-md flex flex-row">
      <View className=" w-[150px] ">
        <Text className=" font-bold text-[16px] ">{heading}</Text>
        <Text className=" mt-4 ">{description}</Text>
        <Text className=" bg-red-400 w-[90px] p-[10px] flex justify-center mt-[45px] text-white ">
          Order now
        </Text>
      </View>

      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className=" w-[170px] h-[150px] rounded-lg "
      />
    </TouchableOpacity>
  );
};

export default PromotionalAdverts;
