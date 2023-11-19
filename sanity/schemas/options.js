export default {
    name: 'options',
    type: 'document',
    title: 'Menu options',
    fields:[
        {
            name: 'name',
            type: 'string',
            title: 'Category option name',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Image of the Option',
            type: 'image',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'category',
            type: 'array',
            title: 'Menu Category',
            of: [{ type: "reference", to: [{ type: "category"}]}],
          },
    ]
}