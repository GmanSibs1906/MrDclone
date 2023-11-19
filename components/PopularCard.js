import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const PopularCard = ({ imgSrc, title }) => {
  const imageUrl = urlFor(imgSrc).url();
  return (
    <TouchableOpacity className="  mr-2  ">
      <Image 
        source={{ uri: imageUrl }} 
        className=" h-[60px] w-[60px] rounded-[50%]" 
      />
    </TouchableOpacity>
  );
};

export default PopularCard;
