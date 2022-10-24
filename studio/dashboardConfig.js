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
                  buildHookId: '6357179f643be6402e8808f2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-hg91wjpj',
                  apiId: '44f0d480-bf3c-4881-bdff-a68f0434f400'
                },
                {
                  buildHookId: '635717a04e1f7c410f67387d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-734zgs8e',
                  apiId: '19c9ff48-bf64-46cd-b902-cef311aedaf4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/russelnelson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-734zgs8e.netlify.app',
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
