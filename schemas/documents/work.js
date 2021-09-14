import React from "react";

const Icon = () => (
  <span
    style={{ fontSize: `20px` }}
    role="presentation"
    aria-label="jigsaw puzzle icon"
  >
    🖋
  </span>
);

export default {
  title: "Work",
  name: "work",
  type: "document",
  icon: Icon,
  fieldsets: [
    {
      title: "Client Information",
      name: "clientInformation",
    },
    {
      title: "Work Details",
      name: "workDetails",
    },
  ],
  fields: [
    {
      title: "Company Name",
      name: "companyName",
      type: "string",
      fieldset: "clientInformation",
    },
    {
      title: "Company Website",
      name: "companyWebsite",
      type: "url",
      fieldset: "clientInformation",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      fieldset: "workDetails",
    },
    {
      title: "Featured Image",
      name: "featuredImage",
      type: "image",
      fieldset: "workDetails",
    },
    {
      title: "Loom Embed",
      name: "loomEmbed",
      type: "text",
      fieldset: "workDetails",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        { type: "image" },
        { type: "youtube" },
        { type: "code" },
      ],
      fieldset: "workDetails",
    },
  ],
};
