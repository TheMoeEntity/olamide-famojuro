// /sanity/schemas/brand.ts
import {defineType, defineField} from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'picture',
      title: 'Brand Picture',
      type: 'image',
    }),
  ],
})
