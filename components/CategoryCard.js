import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ imgSrc, title }) => {
  const imageUrl = urlFor(imgSrc).url();
  return (
    <TouchableOpacity className=" relative mr-2 pb-[10px] px-[5px]  rounded-lg bg-[#04b2bc] flex justify-center items-center ">
      <Image 
        source={{ uri: imageUrl }} 
        className=" h-20 w-20 " 
      />
      <Text className=" absolute bottom-[0px] left-auto text-white font-bold p-[2px] rounded-lg ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
