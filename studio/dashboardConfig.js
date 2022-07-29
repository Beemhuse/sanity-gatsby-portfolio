export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62e3eb71c654e91ff9433b2e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6uv2w2u9',
                  apiId: '21cc9f91-24bd-4383-aa66-70d9a5913c1f'
                },
                {
                  buildHookId: '62e3eb7193b387215f3fb819',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g56oz9vg',
                  apiId: '7c82250b-b437-48db-9cda-422c2c455f45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Beemhuse/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g56oz9vg.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
