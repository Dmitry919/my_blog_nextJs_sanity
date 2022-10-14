export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    groups: [
        {
          name: 'content',
          title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
          },
      ],
    fields: [
      {
        name: 'meta_title',
        type: 'string',
        title: 'Meta title',
        group: 'meta',
        validation: Rule => Rule.required(),
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),
      },
      {
        name: 'releaseDate',
        type: 'date',
        title: 'Release date',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        validation: Rule => Rule.required(),
        fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            },
            {
              // Editing this field will be hidden behind an "Edit"-button
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            }
          ]
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        validation: Rule => Rule.required(),
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        validation: Rule => Rule.required(),
      },
      {
        title: 'Body content',
        name: 'body',
        type: 'array',
        group: 'content',
        validation: Rule => Rule.required(),
        of: [
            {
                type: 'block'
            },
            {
                type: 'image'
            }
        ]
      }
    ]
  }