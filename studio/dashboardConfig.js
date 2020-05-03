export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eaf18d36d3a2d961be11cfc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zquz9vgp',
                  apiId: 'b326e356-87a2-4c9f-acf0-8bf2956cf28a'
                },
                {
                  buildHookId: '5eaf18d37feab7830d35431a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gzko31oi',
                  apiId: '91acfc2e-4421-4f56-8499-213b49de84a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RileySeaburg/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gzko31oi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
