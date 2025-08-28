import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'category', type: 'string', title: 'Category', options: { list: ['physical', 'digital']}}),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 }}),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'image', type: 'image', title: 'Image' }),
    defineField({ name: 'benefits', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'stats', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string', title: 'Label' },
      { name: 'value', type: 'string', title: 'Value' }
    ] }]}),
    defineField({ name: 'effectiveness', type: 'array', of: [{ type: 'object', fields: [
      { name: 'medium', type: 'string', title: 'Medium' },
      { name: 'percentage', type: 'number', title: 'Percentage' }
    ] }]}),
    defineField({ name: 'costs', type: 'array', of: [{ type: 'object', fields: [
      { name: 'medium', type: 'string', title: 'Medium' },
      { name: 'cpm', type: 'string', title: 'CPM' }
    ] }]}),
    defineField({ name: 'locations', type: 'array', of: [{ type: 'string' }] }),
  ]
})
