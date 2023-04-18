import {defineField} from 'sanity'

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
    }),
  ],
}
