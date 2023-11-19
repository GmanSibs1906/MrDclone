import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MapPinIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/solid";
import Categorys from "../components/Categorys";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";
import featured from "../sanity/schemas/featured";
import CategoryBanner from "../components/CategoryBanner";
import PopularBrands from "../components/PopularBrands";
import MenuItems from "../components/MenuItems";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])
  const [categories, setCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
      },
    }
    `).then(data => {
      setFeaturedCategories(data);
    })
  },[])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "category"]{
      ...,
    }
    `).then(data => {
      setCategories(data);
    })
  },[])



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

    {/* User banner */}
      <View className=" relative ">
        <Image source={require("../assets/images/graphic.png")} 
          className=" h-[80px] opacity-20 "
        />
        <View className=" absolute p-[10px] flex flex-row ">
        <Image
            source={require("../assets/images/user.jpg")}
            className=" h-[60px] w-[60px] bg-gray-300 p-4 rounded-full"
          />
          <View className="  ">
          <Text className=" font-bold text-[10px] p-[2px] w-[123px] text-[#4aeaf6] bg-[#7b7b7b] ml-[20px] mt-[10px] italic ">The only app you need</Text>
          <Text className=" font-bold text-[25px] ml-[20px] italic ">Welcome Gman</Text>
          </View>
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
      <ScrollView className=" mb-[270px] ">

        {/* Categories */}
        <Categorys />
        <ScrollView
        horizontal 
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {categories?.map((item)=>(
          <CategoryBanner key={item._id} id={item._id} title={item.name} description={item.description} image={item.image} heading={item.heading} /> 
        ))}
      </ScrollView>

      {/* Popular Brands */}
      <View className=" mt-[40px] px-[20px] mb-[20px] ">
      <Text className=" font-bold text-[25px] mb-[5px] ">Popular Brands</Text>
      <PopularBrands />
      </View>
     

         

        {/* Featured Rows */}

        {featuredCategories?.map((item)=>(
          <FeaturedRow key={item._id} id={item._id} title={item.name} description={item.short_description} /> 
        ))}

        {/* Menu Items */}
        <View className=" my-[25px] px-[20px] ">
        <Text className=" font-bold text-[25px] mb-[5px] ">Menu Items</Text>
        <MenuItems />
        </View>
        

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;