import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import sanityClient from "../sanity";
import PopularCard from './PopularCard';

const Popular = () => {

  const [popular, setPopular] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "popular"]{
      ...,
    }
    `).then(data => {
      setPopular(data);
    })
  },[])


  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}
    >

    {/* CategoryCard */}
    {/* {popular.map((option)=> (
       <PopularCard 
       imgSrc={option.image} 
       title={option.name}
     />
    ))} */}
   

    </ScrollView>
  )
}

export default Popular