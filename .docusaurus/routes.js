import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '639'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e5f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c6b'),
            routes: [
              {
                path: '/docs/category/dollar-cost-average-tutorial',
                component: ComponentCreator('/docs/category/dollar-cost-average-tutorial', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/agent',
                component: ComponentCreator('/docs/dca-tutorial/agent', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/congratulations',
                component: ComponentCreator('/docs/dca-tutorial/congratulations', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/dca-logic',
                component: ComponentCreator('/docs/dca-tutorial/dca-logic', 'c80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/deployment',
                component: ComponentCreator('/docs/dca-tutorial/deployment', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/introduction',
                component: ComponentCreator('/docs/dca-tutorial/introduction', '112'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/setup',
                component: ComponentCreator('/docs/dca-tutorial/setup', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/testing',
                component: ComponentCreator('/docs/dca-tutorial/testing', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dca-tutorial/vincent-integration',
                component: ComponentCreator('/docs/dca-tutorial/vincent-integration', 'f9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/python-agentkit',
                component: ComponentCreator('/docs/python-agentkit', '4ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/typescript-agentkit',
                component: ComponentCreator('/docs/typescript-agentkit', 'cb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/typescript-elizaos',
                component: ComponentCreator('/docs/typescript-elizaos', '891'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
