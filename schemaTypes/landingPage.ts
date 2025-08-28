import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 }}),
    defineField({ name: 'heroTitle', type: 'string', title: 'Hero Title' }),
    defineField({ name: 'heroSubtitle', type: 'text', title: 'Hero Subtitle' }),
    defineField({ name: 'sections', type: 'array', of: [{ type: 'block' }] }),
  ]
})
