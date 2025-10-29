// /sanity/schemas/section.ts
import {defineType, defineField} from 'sanity'

export const section = defineType({
  name: 'section',
  title: 'Section',
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
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [{type: 'image'}, {type: 'file'}],
      description: 'Upload image(s) or video(s)',
      options: {layout: 'grid'},
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL Link',
      description: 'Optionally add video link (e.g YouTube)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sectionHeight',
      title: 'Section Height',
      description: 'e.g h-96 (multiply by 4 to get actual pixels), h-[500px], md:h-[600px]',
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
