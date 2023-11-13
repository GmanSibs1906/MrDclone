import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price of dishes in ZAR',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
})
