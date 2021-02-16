export default {
  title: "Featured Work",
  name: "featuredWork",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Work",
      name: "works",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "work" }],
        },
      ],
    },
  ],
};
