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
        layout: 'radio',
      },
    }),
    defineField({
      name: 'media',
      title: 'Media (max 3)',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.max(3),
      hidden: ({parent}) => parent?.mediaType === 'video',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL Link',
      description: 'Paste a video link (e.g YouTube, Vimeo)',
      type: 'string',
      hidden: ({parent}) => parent?.mediaType !== 'video',
    }),
    defineField({
      name: 'uploadedVideo',
      title: 'Upload Video',
      description: 'Or upload a video file directly',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      hidden: ({parent}) => parent?.mediaType !== 'video',
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
