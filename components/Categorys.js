import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categorys = () => {
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
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>
    <CategoryCard imgSrc="https://links.papareact.com/wru" title="Testing"/>

    </ScrollView>
  )
}

export default Categorys