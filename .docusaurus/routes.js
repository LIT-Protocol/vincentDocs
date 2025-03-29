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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0bd'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e8c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a5d'),
            routes: [
              {
                path: '/docs/Developers/Custom-Tools',
                component: ComponentCreator('/docs/Developers/Custom-Tools', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Developers/Quick-Start',
                component: ComponentCreator('/docs/Developers/Quick-Start', '9da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Developers/Why-Vincent',
                component: ComponentCreator('/docs/Developers/Why-Vincent', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Users/Quick-Start',
                component: ComponentCreator('/docs/Users/Quick-Start', 'aff'),
                exact: true
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
