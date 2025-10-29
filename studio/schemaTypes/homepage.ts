// /sanity/schemas/homepage.ts
import {defineType, defineField} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      title: 'Homepage Title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'resume',
      title: 'Resume File',
      type: 'file',
    }),
    defineField({
      name: 'introVideo',
      title: 'Intro Video',
      type: 'object',
      fields: [
        {
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube or direct video URL',
        },
        {
          name: 'uploadedVideo',
          title: 'Upload Video',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        },
        {
          name: 'videoHeight',
          title: 'Video Height',
          type: 'string',
          description: 'Height of the video player (e.g. "360px", "100%")',
        },
      ],
    }),
    defineField({
      name: 'films',
      title: 'Films Section',
      type: 'section',
    }),
    defineField({
      name: 'characters',
      title: 'Characters Section',
      type: 'section',
    }),
    defineField({
      name: 'traditionalArt',
      title: 'Traditional Art',
      type: 'tradArt',
    }),
    defineField({
      name: 'learningCenter',
      title: 'Learning Center (Tutorials)',
      type: 'section',
    }),
    defineField({
      name: 'onlineStore',
      title: 'Online Store',
      type: 'section',
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'about',
    }),
    defineField({
      name: 'brands',
      title: 'Brands Worked With',
      type: 'array',
      of: [{type: 'brand'}],
    }),
    defineField({
      name: 'links',
      title: 'Social Links',
      type: 'object',
      fields: [
        {name: 'gumroad', title: 'Gumroad', type: 'url'},
        {name: 'artstation', title: 'ArtStation', type: 'url'},
        {name: 'linkedin', title: 'LinkedIn', type: 'url'},
        {name: 'instagram', title: 'Instagram', type: 'url'},
        {name: 'youtube', title: 'YouTube', type: 'url'},
        {name: 'artstationFilms', title: 'ArtStation Films', type: 'url'},
      ],
    }),
  ],
})
