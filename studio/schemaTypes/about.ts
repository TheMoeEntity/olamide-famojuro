// /sanity/schemas/about.ts
import {defineType, defineField} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    }),
  ],
})
