// /sanity/schemas/tradArt.ts
import {defineType, defineField} from 'sanity'

export const tradArt = defineType({
  name: 'tradArt',
  title: 'Traditional Art',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Picture', value: 'picture'},
          {title: 'Video', value: 'video'},
        ],
      },
    }),
    defineField({
      name: 'media',
      title: 'Media (max 3)',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        {name: 'caption', title: 'Caption', type: 'string'},
        {name: 'href', title: 'Link', type: 'url'},
      ],
    }),
  ],
})
