import { View, Text, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';
import { StarIcon, MapPinIcon } from 'react-native-heroicons/solid'

export default function MenuItem({image, name, rating, price}) {
    const imageUrl = urlFor(image).url();
  return (
    <View className=" bg-[#04b2bc] my-[20px] ">
      <Image 
        source={{ uri: imageUrl }} 
        className=" h-[250px] w-[100%] " 
      />
      <View className=" flex flex-row pl-[5px]">
      <Text className=" my-[5px] font-bold text-md text-white ">{name}</Text>
      <View className=" ml-[15px] flex flex-row items-center">
      <StarIcon color="#fd702b"  size={18}/>
            <Text className=" text-md text-white ml-[8px] ">
                <Text className=" mr-[10px] ">{rating}</Text> 
            </Text> 
            {/* <Text className=" mx-[15px] font-bold text-md text-white ">Price : R{price}</Text> */}
      </View>
      </View>
      
    </View>
  )
}