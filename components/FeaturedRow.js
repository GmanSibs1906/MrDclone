import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import RestaurantCard from './RestaurantCard';
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description, }) => {

  const [restaurants, setRestaurants] = useState([])
  
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0]
    `,{ id }).then(
      data => {setRestaurants(data?.restaurants);}
    )
  },[])

  return (
    <View className=" flex-1">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#37ccd6" />  
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView 
        horizontal 
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 flex-1"
      >
        {/*ResturantCards...*/}
        {restaurants?.map(restaurant=>(
          <RestaurantCard 
          id={restaurant._id}
          key={restaurant._id}
          img={restaurant?.image}
          title= {restaurant.name}
          rating={restaurant.rating}
          genre={restaurant.type?.name}
          address={restaurant.address}
          short_description={restaurant.short_description}
          dishes={restaurant.dishes}
          long={restaurant.long}
          lat={restaurant.lat}
          />
        ))}
        


      </ScrollView>
    </View> 
  );
};

export default FeaturedRow;