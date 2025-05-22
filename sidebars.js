// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "Why-Vincent",
    "Concepts",
    {
      type: "category",
      label: "Developers",
      link: {
        type: "doc",
        id: "Developers/Quick-Start",
      },
      items: ["Developers/Quick-Start", "Developers/Custom-Tools"],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "Users/Onboarding",
      },
      items: ["Users/Onboarding"],
    },
  ],
};

export default sidebars;
