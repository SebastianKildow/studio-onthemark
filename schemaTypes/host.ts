import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'host',
  title: 'Host',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name', maxLength: 96 }}),
    defineField({ name: 'logo', type: 'image', title: 'Logo' }),
    defineField({ name: 'image', type: 'image', title: 'Image' }),
    defineField({ name: 'location', type: 'string', title: 'Location' }),
    defineField({ name: 'category', type: 'string', title: 'Category' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'phone', type: 'string', title: 'Phone' }),
    defineField({ name: 'email', type: 'string', title: 'Email' }),
    defineField({ name: 'website', type: 'url', title: 'Website' }),
    defineField({ name: 'googleBusinessPage', type: 'url', title: 'Google Business Page' }),
    defineField({ name: 'adOpportunities', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'featuredItems', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
    defineField({ name: 'rating', type: 'number', title: 'Rating' }),
    defineField({ name: 'reviews', type: 'number', title: 'Reviews' }),
    defineField({ name: 'lat', type: 'number', title: 'Latitude' }),
    defineField({ name: 'lng', type: 'number', title: 'Longitude' }),
  ]
})
