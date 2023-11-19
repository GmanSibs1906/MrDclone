import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import sanityClient from "../sanity";
import MenuItem from './MenuItem';

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([])

  useEffect(()=>{
    sanityClient.fetch(`
    *[_type == "dish"]{
      ...,
    }
    `).then(data => {
      setMenuItems(data);
    })
  },[])


  return (
    <ScrollView>
      {menuItems.map((item)=> (
        <MenuItem key={item.id} image={item.image} name={item.name} rating={item.rating} price={item.price} />
      ))}
    </ScrollView>
  )
}