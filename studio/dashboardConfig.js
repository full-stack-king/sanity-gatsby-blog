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
                  buildHookId: '5e1fe6a91568660184e7993d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-os1tack6',
                  apiId: 'be7f9ea2-bd14-4130-a4e0-4d8d97a9f266'
                },
                {
                  buildHookId: '5e1fe6a9e9280a01db00cde5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ui8ff8ri',
                  apiId: '657e09be-bb0c-4eda-a4a2-71798e8b49f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rajakannan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ui8ff8ri.netlify.com', category: 'apps' }
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
