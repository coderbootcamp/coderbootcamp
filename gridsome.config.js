module.exports = {
  siteName: 'Coder Bootcamp',
  siteUrl: 'https://coderbootcamp.in',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
        refs: {
          tag: 'Tag',
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/topic/*.md',
        typeName: 'Topic',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-76337962-4'
      }
    }
  ],
  templates: {
    Post: '/posts/:title',
    Tag: '/tags/:title',
    Topic: '/topics/:title'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
    }
  }
}
