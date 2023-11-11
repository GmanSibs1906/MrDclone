import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/solid";
import Categorys from "../components/Categorys";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" bg-gray-200 ">
      {/* Header */}
      <View className=" flex-row py-4 ">
        <View className=" flex-1 justify-center items-center ">
          <Text className=" font-bold text-xl underline">
            <MapPinIcon size={20} color="black" />
            Current Location
          </Text>
        </View>
      </View>

      {/* User bar */}
      <View className=" bg-[#ffffff] flex-row my-2 ">
        <View>
        <Image
          source={require("../assets/images/logo-white.png")}
          className=" h-[50px] w-[50px] ml-2"
        />
         <Image
          source={require("../assets/images/logoD.png")}
          className=" h-[30px] w-[30px] ml-5"
        />
        </View>
       
        <Image
          source={require("../assets/images/wallet.png")}
          className=" h-[80.0px] w-[130.0px] mr-2 my-2"
        />
        <View className=" flex-1 justify-center items-center mr-[20px]">
          <View className=" flex-row items-center ">
            <Text className=" text-[18px] text-gray-500 ml-[15px] font-light ">Wallet : </Text>
            <Text className=" font-bold text-[18px] text-[#37ccd6] ">R345.00</Text>
          </View>
          <View className=" flex-row ">
            <Text className=" text-[18px] text-gray-500 font-light ">Points : </Text>
            <Text className=" font-bold text-[18px] text-[#fd712b] ">R41.00</Text>
          </View>
        </View>
        <View className=" flex-row flex-1 justify-end items-center mr-4">
          <Image
            source={require("../assets/images/user.jpg")}
            className=" h-[60px] w-[60px] bg-gray-300 p-4 rounded-full"
          />
        </View>
      </View>

      {/* Search */}
      <View className=" flex-row items-center space-x-2 pb-2 mx-2 px-4 my-2">
        <View className=" flex-row flex-1 space-x-2 bg-[#f6f6f6] p-3 ">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Search restaurants, shops"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#37ccd6" size={30} />
      </View>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categorys />

        {/* Featured Rows */}
        <FeaturedRow
        id="123"
          title="Featured"
          description="Paid placements from our partners"
        /> 

        {/* Tasty Discounts */}
        <FeaturedRow
        id="1234"
          title="Tasty discounts"
          description="Paid placements from our partners"
        /> 

        {/* Offers near you */}
        <FeaturedRow
        id="12345"
          title="Offers near you!"
          description="Paid placements from our partners"
        /> 
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;