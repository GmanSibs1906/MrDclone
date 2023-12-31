import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from "../sanity";

const Categorys = () => {

  const [options, setOption] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "options"]{
      ...,
    }
    `).then(data => {
      setOption(data);
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
    {options.map((option)=> (
       <CategoryCard 
       key = {option.id}
       imgSrc={option.image} 
       title={option.name}
     />
    ))}
   

    </ScrollView>
  )
}

export default Categorys