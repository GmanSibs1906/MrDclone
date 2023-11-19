export default {
    name: 'popular',
    type: 'document',
    title: 'Popular Brands',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Brand name',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image of the Brand',
            type: 'image',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: "reference", to: [{ type: "restaurant"}]}],
          },
    ]
}