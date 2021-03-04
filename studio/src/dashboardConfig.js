export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60413899ea0f3409615a294a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-s44ep3ga',
                  apiId: '0a007ae1-2c13-4160-beba-669026dc2e2c'
                },
                {
                  buildHookId: '60413899e2badc0d9e720885',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3ubnjnfz',
                  apiId: 'e5f2bf63-2127-457b-9c2f-bb1266b1b39b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adammlr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3ubnjnfz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
