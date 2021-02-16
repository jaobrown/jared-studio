export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "My Netlify deploys",
        sites: [
          {
            title: "Website",
            apiId: "a2f13cf4-10a4-4fd7-81dc-0d29ff150022",
            buildHookId: "602acd76e4ec29603f59be9f",
            name: "jaredto",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recently edited pages",
        order: "_updatedAt desc",
        limit: 5,
        types: ["page"],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recently edited work",
        order: "_updatedAt desc",
        limit: 5,
        types: ["work"],
      },
    },
  ],
};
