import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import PromotionalAdverts from './PromotionalAdverts';
import sanityClient from "../sanity";

const CategoryBanner = ({ id, title, description, image, heading }) => {

    // console.log(image)

  return (
    <View>
      <ScrollView
        horizontal 
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*ResturantCards...*/}
          <PromotionalAdverts 
          id={id}
          key={id}
          imgUrl={image}
          title= {title}
          description={description}
          heading= {heading}
          />
        


      </ScrollView>
    </View> 
  );
};

export default CategoryBanner;