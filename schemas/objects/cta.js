import React from "react";

const Icon = () => (
  <span
    style={{ fontSize: `20px` }}
    role="presentation"
    aria-label="chain-link icon"
  >
    🔗
  </span>
);

export default {
  title: "Call to action",
  name: "cta",
  type: "object",
  icon: Icon,
  fieldsets: [
    {
      title: "Link",
      name: "link",
      description: "Only the first value of these will be used",
    },
  ],
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "Page",
      name: "pageRoute",
      type: "reference",
      fieldset: "link",
      to: [{ type: "page" }],
    },
    {
      title: "External link",
      name: "link",
      type: "string",
      description: "Example: https://www.sanity.io",
      fieldset: "link",
    },
    {
      title: "Style",
      name: "style",
      type: "string",
      options: {
        layout: "radio",
        list: ["stripes", "solid", "outline"],
      },
    },
  ],
  preview: {
    select: {
      title: "text",
      route: "pageRoute.slug.current",
      link: "link",
    },
    prepare({ title, route, link }) {
      let subtitle = "Not set";
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
