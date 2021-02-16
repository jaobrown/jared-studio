import React from "react";

const Icon = () => (
  <span
    style={{ fontSize: `20px` }}
    role="presentation"
    aria-label="jigsaw puzzle icon"
  >
    📃
  </span>
);

export default {
  title: "Pages",
  name: "page",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      of: [
        { type: "hero" },
        { type: "about" },
        { type: "threeColumnCta" },
        { type: "experiences" },
        { type: "educations" },
        { type: "featuredWork" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      media: "icon",
    },
    prepare({ title, subtitle, media }) {
      let route = subtitle ? subtitle : `/`;
      return {
        title,
        subtitle: `Route: ${route}`,
        media,
      };
    },
  },
};
