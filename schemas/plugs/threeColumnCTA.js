export default {
  title: "Three Column CTA",
  name: "threeColumnCta",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "cta" }],
    },
  ],
};
