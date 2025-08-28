import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource / Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 }}),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({ name: 'coverImage', type: 'image', title: 'Cover Image' }),
    defineField({ name: 'publishedAt', type: 'datetime', title: 'Published At' }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }] }),
  ]
})
